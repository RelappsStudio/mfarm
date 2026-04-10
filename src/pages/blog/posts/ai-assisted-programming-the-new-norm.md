---
layout: ../../../layouts/BlogPostLayout.astro
title: 'AI assisted programming - the new norm'
pubDate: 2026-04-11
lastUpdated: 2026-04-11
description: ''
author: 'Restless'
image:
    url: 'https://miro.medium.com/v2/resize:fit:1316/format:webp/1*N0eGNCnwBgzx3AdoO7k1vA.png'
    alt: 'Android ios flutter trifecta'
tags: ["opinion", "AI",]
---

# Prologue

After years of hearing "programming is dead" or "coding is a solved problem" or "software enginnering is a dead career" almost every day, I have to say- first of all - it hurts. It really does. I doubt anyone with any skill would like to hear that their skill is worthless. Second, I knew these opinions were coming from 3 types of people: 
- salespeople - trying to blow up their business or another course
- grifters - doing the same thing as above
- envious, bitter people - notice how the farther away someone is from being an actual programmer the more intense opinions they have about AI

You saw this everywhere if you are partial to any social media of choice, it being Linkedin, Reddit, Twitter, even YouTube honestly. 
- "Buy my course so you can ride the wave"
- "Use my super fantastic new app" (it being a bland chat UI connected to chat gpt, another hallucinating calorie counter, another todo/notes app, or yet one more barely functional fitness app)
- "It finally happened, we don't need developers for development. We will do everything ourselves" said seemingly every designer, PM and analyst on the planet

But for actual software engineers the things looked different. Most developers looked at AI with pity as it proposed bad patterns, outdated libraries, wrote self-contradictory code, repeatedly failed at multi-file work. It was bad. I mean almost unusable bad, unless you were using AI for small one-shot tasks like writing a singular method.

From experience I still remember arguing with chat gpt about Azure devops pipelines and how can they be connected to Azure documentation. How surprised I was that AI instead of referring to real world documentation was happily recommending non-existent API calls and non-existent CLI commands.

These waves of fabricated AI hype kept crashing against the cold, hard cliffs of reality. And the reality was that the tools are just not there yet. Though maybe not by a long shot. 
-

So as a regular AI checkup, boosted by the fresh licenses aquired by my employer I tried playing around with AI again near the end of last year.

# Something has changed

I tried Opus 4.5 in late 2025 and was actually shocked. From a single prompt to an actual application in under 5 minutes. And not some shoddy, barely-standing half-product written with code that's glued by hopes and dreams. It was the cleanest of clean architectures supporting a bare bones but still functional TODO application. 

I tried doing the same thing myself from scratch. My best time - 40 minutes. Proper abstraction, multi-flavored project with correct hexagonal, domain-layer-centric architecture. For the first time in years I felt genuine fear but also, weirdly, excitement.

Over the course of next weeks I tried incorporating multiple AIs into my workflow. Kept using Opus. Tried multiple versions of Codex. While I saw the limitations it was the first time where it was actually useful and contributed to real-world work that I was doing.

AI keeps getting better but as new benchmarks for it's real usefulness become harder and harder the bar keeps moving forward. I think it's still too early to tell whether the ability to cost ratio may have plateaued, though many have tried.

I really recommend watching [this video](https://youtu.be/h7QK7RDK1jI?si=EVKzMeFobGHwptqY) going more in depth about what AI can actually do and how well it can do it. If you prefer a written form there is a [recent study done by Google showing how AI can perform roughly 70% of programming work based on real life cases and problems, focusing specifically on Android development.](https://android-developers.googleblog.com/2026/03/elevating-ai-assisted-androi.html)



# So, you don't think we'll be replaced?

I never truly believed that we will be, the way I see it is it's really all mostly hype from non technical people. Or rather what I call "pretend-tech people".

I saw 1 good metaphor online and came to 1 fundamental conclusion myself. 

The metaphor I saw online was to Excel. Back in the day, say 40 years ago all accounting was done manually, on paper, in books. Then came excel. It basically did all the work on the computer. This didn't make accountants unemployed, it made more accountants. The barrier of entry was shifted- you were no longer a "bookkeeper" but you became an "excel specialist". Same thing happens for programming. The barrier of entry is being actively lowered. The same way as when programming moved from writing punch cards to full blown IDEs. It became easier to start and easier to work with. 

The conclusion I'm reaching myself is that for years now it was a common joke that "programming is 80% googling" (and 15% debugging ). Personally I think AI will make the googling part shorter giving more time for writing code, thinking about architecture and testing the output. Now instead of finding a reddit thread that leads to a stack overflow that leads to some help forum that leads to some github issue AI makes you skip all that and gives you an answer that's roughly 60-80% correct for any given technical question.

I think this replacement argument is exactly the same cycle as the transition from programming on punch cards to virtual editors. Then no-code tools came around, and turned out to also not be enough. That is really the core of the whole conversation. AI bridged the gap from nothing to "good enough". But good enough will always inevitably lose to "great".

What many people also seem to forget about is that there is a whole world of specialized software that is under a lot of scrutiny and regulations by default. Things like banking apps, medical software, military programs, public infrastructure. All this requires deep expertise and incredibly careful approach to development. 

As if these arguments were not enough there is also a thought of "what's next?". Even if we replace millions of jobs with robots on a scale incomparably larger than industrial revolution did, who will pay taxes? Who will buy goods? Not robots. The dillemma of AI creating the world that needs universal basic income for people who become truly "obsolete" (not worthless - big distinction) seems too big for me to comprehend so for now let's leave it as a thought experiment and move on.

# Why would I want a small dumbass on my computer when I have a big dumbass in my browser?

That was my response to people who kept chasing the self-hosted dream of productivity, privacy and possibly creating the next trillion dollar business. It changed this year.

I was enticed by several reddit threads and youtube videos into trying out Gemma 4. A new family of AI models from Google. Fully open source - which is a rarity in this space. No weird clauses in the license - take the program, do what you want with it. But that was only half of the reason for my interest. The second half was that for the first time any AI model actually seemed... reasonable.

This specific family of models were created using Google's new quantization method making it incredibly small. And not only small to download, small to run on a regular grade of hardware. Finally a model that did not take a full disk of space and a full inheritance worth of money in graphics cards. 

The longest part of setting everything up was the download. The integrations with VSCode and IntelliJ were seamless and worked instantly. I was so shocked about the convenience I had to unplug internet from my computer to truly believe all of this was happening on my PC, not some megacorporation's servers. 

I immediately started using it to help on my side projects. Not giving it full autonomy as some people are comfortable with via tools like Open Claw. But as an assistant. Someone, or rather - something - to help along the way. The words "solve problems, not syntax" come to mind. 



# The 10x dream or 10x hallucination

I may not be ten times more productive but finally I'm ten times more excited to experiment. Working with AI is like having a buddy that worked in any given technology for 10 years, but has just been retired for the last 2-3 years. May be rusty on the details but is perfectly capable of following the grander idea of what you want to do and can ultimately help in a bind or suggest a few paths to follow when you have absolutely no clue what to do next.

That being said the limitations did not magically disappear. The first task I gave it was to implement lint checks on my web project. The web project still does not have linter to this day, so you can imagine how that went. Its responses can be a bit hand-wavy, follow bad patterns. It is after all an amalgamation of knowledge from random parts of internet. But it is definitely the smartest rubber duck I've ever talked to.

The way I see software is that it helps to create new platforms for human expression. Which in my book is always a good thing. With the help of this assistant I'm definitely more excited to create more, try new technologies I've never worked with before. The barrier of entry is on the floor right now. 

What me and many others are starting to notice is that AI lowered the overhead that development always had- in that writing code always took a long time and effort. Now we're able to create everything much faster. Technical debt disappears (or explodes depending on who's using the tools), these refactors that were always deprioritized suddenly have space to happen. Features get delivered as fast as they are imagined.

What we need to think about more is how to use that momentum, not how to keep everything the same by artificially slowing all projects down by laying off half the company. If a company needs to lay of 30% of the company "because AI", they didn't really have that much innovation to create as they wanted everyone to believe. 

# The great ethical dilemma

I cannot in good conscience talk about AI and not mention the environmental impact. The fact that data centers used for training and hosting AI models use exorbitant amount of water, to the point of even causing shortages of clean, drinking water in some areas, as mentioned in [New York Times](https://www.nytimes.com/2025/07/14/technology/meta-data-center-water.html), [Bloomberg](https://www.bloomberg.com/graphics/2025-ai-impacts-data-centers-water-data/), and [Forbes](https://www.forbes.com/sites/kensilverstein/2026/01/11/americas-ai-boom-is-running-into-an-unplanned-water-problem/).

Data centers that take up land which could be used for farming or living areas. Data centers that use up so much electricity that the general public is forced to pay increased prices while also getting regular outages, and contribute to air pollution [1](https://www.theatlantic.com/magazine/2026/04/ai-data-centers-energy-demands/686064/), [2](https://www.cnbc.com/2026/03/13/ai-data-centers-electricity-prices-backlash-ratepayer-protection.html)

Of course we cannot forget about the fact that pretty much all the models are learning from stolen copyrighted materials. [The most infamous case here being Meta's lawsuit regarding the use of the largest library of pirated books in the world to train their AI.](https://www.wired.com/story/new-documents-unredacted-meta-copyright-ai-lawsuit/)

There is probably a slew of other major and minor controversies or maybe even crimes that I forgot about or they're just not coming out yet. The question here is whether this should stop anyone. Even in good conscience chat gpt has 700 000 000 active users. I did not see any reliable data points for other models. 

As controversial as it may sound I see it exactly the same as the plastic problem. The problem is on the manufacturer side, not the consumer. But how only 10% of manufactured plastic gets recycled and how recycling plants still ship trash to poorer Asian countries, where it's stored or just burned is a whole another topic.

The point here is that if you want to truly have your own opinion you really have to try it yourself. It's free, it's there, and if you're reading this article means you have access to internet. Take it with the good, the bad, the useful and the absolutely useless. The whole package.

# What I'm trying to say

Let yourself be excited, but do not blindly buy into the hype. There will always be people who will say the most outrageous things just to get a reaction. People who will look you in the eye and keep lying until they get some money out of you. Remember that there are people with normal middle-of-the-road opinions, but they're usually not online. I certainly forgot, as even people in my closer circles were getting carried away by fake promises of strangers online. 

As for me- the attitude of never directly paying any money for any AI is still my north star guiding through this landscape of dubious claims and play-pretend, wishful thinking that a computer program will be a savior for their life or humanity as a whole. I am quite happy with the self hosted experiment and cautiously and very skeptically enthusiastic for the future where maybe the comfort of looking up information and starting new hobbies is made slightly more accessible than it was in last years.

I hope this voice of anxiety mixed with disbelief but also slight hope brings you comfort in the world where everyone pretends to be certain of everything. Or at least provided one perspective or piece of information that was new to you that will be useful. This was my first opinionated article. If you liked it let me know if I should continue making those or stick with purely technical topics.

I hope this goes without saying but this post as all my posts are hand-written. No AI was used at any point during creation of any of these texts. As much as I may be getting warmer to the idea of using them more for work and personal projects I would not let my dishwasher write its "thoughts" and "opinions" on the internet. 