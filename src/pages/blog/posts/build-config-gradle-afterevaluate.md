---
layout: ../../../layouts/BlogPostLayout.astro
title: 'Manage build config of all android modules with Gradle afterEvaluate'
pubDate: 2025-07-01
lastUpdated: 2025-07-01
description: ''
author: 'Restless'
image:
    url: 'https://miro.medium.com/v2/resize:fit:836/format:webp/1*yxzwPUz0aNVe-w648Lc4jA.png'
    alt: 'Gradle elephant inside a smartphone outline'
tags: ["technical", "mobile", "android", "gradle"]
---


![Image from Medium article about Gradle — https://proandroiddev.com/make-gradle-do-more-work-for-you-than-just-build-your-android-app-9462baa08951](https://miro.medium.com/v2/resize:fit:836/format:webp/1*yxzwPUz0aNVe-w648Lc4jA.png)

With this at your project’s core **you have full control** over configurations of all packages you’re using or intend to use.

The problem — introduction
--------------------------

Working on a production application is no easy feat. Trying to juggle technical perfection among functional requirements that need to be implemented. It’s almost always a compromise. I’m here to help you maintain that compromise a little better on the side of technical perfection.

Mobile apps have tons of dependencies, whether direct or inherited. The largest project I’ve worked with had over 300 direct dependencies. Full Gradle dependency scan, including transitive ones, was over 1500 lines long. For more information on how to scan and keep track of your project’s dependencies you can [visit my other article here](https://medium.com/@psadlowski28/automated-dependency-analysis-in-gradle-b9d0baeb248a).

Despite what you might hear online, from people with often questionable experience and idealistic approach to work that regularly does not allow idealism in favor of fast delivery — **it is normal for a project to have hundreds dependencies, closed-source plugins in-code, or forks of packages** because they are either discontinued or it’s simply faster to customize them yourself rather than dealing with their owners online.

Yet your **project must still comply with industry standards** set by Google like requirement for a namespace, 16kb shared objects compatibility, minimum sdk version, target sdk version, jvm compatibility. **All these values can be set in one place** to create a singular source of truth for your whole project. The fun part? It will work for both local and fetched-from-web packages.

The solution
------------

Let’s start with the **Gradle code** since that **will be universal** for both native and multiplatform Android projects using frameworks. There will be an example how this works in Flutter, below.

Since Android apps are at their core a multi-project builds [as defined by Gradle](https://docs.gradle.org/current/userguide/multi_project_builds.html) simply navigate to the root project (your app module). Open the **android/build.gradle.kts** and import these classes:

```
import com.android.build.gradle.BaseExtension
import org.jetbrains.kotlin.gradle.dsl.KotlinJvmOptions
import org.gradle.api.JavaVersion
```

**inside the** `allProjects{}`definition that’s already there apply this code:

```
 subprojects {
    afterEvaluate {
        // Check if a sub-project is an android project
        val isAndroid = plugins.hasPlugin("com.android.application") || plugins.hasPlugin("com.android.library")
        if (isAndroid) {
            val android = extensions.findByName("android") as? BaseExtension ?: return@afterEvaluate
            // Apply all android values as needed as you would for your app
            android.apply {
                compileSdkVersion(35)
                defaultConfig {
                    minSdkVersion(24)
                }
                //ndkVersion = "26.1.10909125"
                buildFeatures.apply {
                    buildConfig = true
                }
                compileOptions {
                    sourceCompatibility = JavaVersion.VERSION_11
                    targetCompatibility = JavaVersion.VERSION_11
                }
                // See if the namespace field exists but is empty or is not there at all
                try {
                    val ns = android::class.java.getMethod("getNamespace").invoke(android) as? String
                    if (ns.isNullOrEmpty()) {
                        // Apply namespace from project group. Every project has to have a group name so this is the best way to make it automatic and working without crashes
                        val setNs = android::class.java.getMethod("setNamespace", String::class.java)
                        setNs.invoke(android, project.group.toString())
                    }
                } catch (ignored: Throwable) {
                    // You can catch and throw custom errors for namespace if you wish
                }
            }
            // Set Kotlin JVM target if available
            extensions.findByName("kotlinOptions")?.let {
                (it as? KotlinJvmOptions)?.jvmTarget = "11"
            }
        }
    }
}
```

The above example is for Gradle.kts, **if you’re still using Groovy use code below**. Your code will look a bit prettier, especially for the namespace check, like so:

```
subprojects {
    afterEvaluate {
        project ->
if (project.hasProperty('android')) {
     
project.android {
     buildFeatures {
        buildConfig true
         }
     defaultConfig {
     minSdkVersion 24
      }
     ndkVersion "26.1.10909125"
if (!project.android.hasProperty('namespace') || project.android.namespace == null) {
    namespace = project.group 
}
    
if (project.android.compileSdkVersion == null || (project.android.compileSdkVersion != 'android-35')) {
     compileSdkVersion 35 
}
     compileOptions {
         sourceCompatibility = JavaVersion.VERSION_11
          targetCompatibility = JavaVersion.VERSION_11
           }
if (project.android.hasProperty('kotlinOptions')) {
     kotlinOptions {
        jvmTarget = "11"
         }
        }
     }
    }
}
}
```

If you’re wondering what other values you can control you can visit either the [Configure your build](https://developer.android.com/build) or [Configure build variants](https://developer.android.com/build/build-variants) documentation which are extensively explaining what each value in `android {}` block means. These snippets contain sample fields that I use most often.

Let’s put that to the test — real world Flutter case
----------------------------------------------------

Just to quickly showcase the setup above I will be using Flutter, mostly for how fast we can set up a project incorrectly to then fix it.

### Set up the project

Assuming you already have Flutter + vsCode environment on your machine, create a folder called `dependency_manager`

Inside of that folder create 2 folders: `core_app` and `plugins`

Inside of `core_app`run these commands:

```
flutter create dependency_manager
cd ..
code .
```

If the last command does not open vsCode at terminal location then manually open `dependency_manager` folder in the editor. Do not change Gradle files just yet.

Congratulations! You now have a base setup of a monorepo structure with an application at the core and space for your custom plugins. You can run the starter application to confirm that it builds without issues.

To add your own plugin simply open terminal at `plugins` folder and run:

```
 flutter create --template=plugin sample_native_plugin --platforms=android
```

### Time for some messing around

Nowadays Flutter is smart enough to include namespace automatically when creating a plugin but imagine manually cloning an old github repository without it, or having some old leftover code already present in your codebase without it.

With the plugin in place we need to connect it to the sample app. Easiest way to do that is to navigate to `core_app/pubspec.yaml` Inside add the dependency like so:

```
sample_native_plugin:
    path: ../plugins/sample_native_plugin
```

Then in `main.dart` file import plugin

```
import 'package:sample_native_plugin/sample_native_plugin.dart';
```

Then attach it to the main screen. I put it into the `_incrementCounter()` method

```
  void _incrementCounter() async {
    SampleNativePlugin().getPlatformVersion();
    setState(() {
      _counter++;
    });
  }
```

You can run the application again to confirm that it still builds correctly.

To force a build error we need to go into `sample_native_plugin/android/build.gradle` There in `android{}` block first value should be `namespace` Delete that field and try to run the application. It will produce an error saying that plugin is missing a namespace.

![captionless image](https://miro.medium.com/v2/resize:fit:1400/format:webp/1*a2GamsFJ0g8iLbZAAoGX9w.png)

Now to make the matters worse, let’s create a scenario where both a local plugin and a plugin from pub.dev is also without a namespace. For that I have selected a discontinued but still working package called [flutter_app_badger](https://pub.dev/packages/flutter_app_badger). If you go to it’s `build.gradle`[on github](https://github.com/g123k/flutter_app_badger/blob/master/android/build.gradle) you will notice the `namespace` field is missing.

Import it into your `core_app/pubspec.yaml`

```
flutter_app_badger: ^1.5.0
```

Import it in your `main.dart`

```
import 'package:flutter_app_badger/flutter_app_badger.dart';
```

And use it anywhere. I just put a method inside `_MyHomePageState` class

```
void initPlatformState() async {
    String appBadgeSupported;
    try {
       bool res = await FlutterAppBadger.isAppBadgeSupported();
      if (res) {
        appBadgeSupported = 'Supported';
      } else {
        appBadgeSupported = 'Not supported';
      }
    } on PlatformException {
      appBadgeSupported = 'Failed to get badge support.';
    }
    if (!mounted) return;
  }
```

Now running the app will produce error about whichever of these plugins is first on the list in the pubspec. Moreover you cannot simply fix a discontinued package. You could change it to a different one, but imagine we’re in a production environment and instead of 2 plugins to align you have 58?

Go into your `core_app/android/build.gradle.kts` and paste the first `subprojects` block from this article. Try to build your app and voila! All the issues resolved themselves.

Conclusion
----------

The namespace example is a bit silly one but it illustrates our problem- many dependencies with different native build settings sometimes need to be aligned. Either because there are new requirements from Google or just because your project demands it to work correctly. With this at your project’s core **you have full control** over configurations of all packages you’re using or intend to use.

If you’re here — thank you for reading. I would assume you either liked the amount of knowledge or the writing style. If you liked either, why not [check out my other articles](https://medium.com/@psadlowski28)?