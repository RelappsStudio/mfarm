import { ActionError, defineAction } from 'astro:actions';
import { Resend } from 'resend';

const resend = new Resend(import.meta.env.RESEND_API_KEY);

export const sendEmail = {
  send: defineAction({
    accept: 'form',
    handler: async (formData) => {
       const name = formData.get('name');
      const email = formData.get('email');
      const subject = formData.get('subject');
      const message = formData.get('message');

      if (!name || !email || !subject || !message) {
        throw new ActionError({
          code: 'BAD_REQUEST',
          message: 'All fields are required.',
        });
      }

       const { data, error } = await resend.emails.send({
        from: `${name} <onboarding@resend.dev>`,
        to: ['relapps.studio@gmail.com'],
        subject: `MFARM: ${subject}`,
        html: `
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <p><strong>Message:</strong> ${message}</p>
        `,
      });

      if (error) {
        throw new ActionError({
          code: 'BAD_REQUEST',
          message: error.message,
        });
      }

      return data;
    },
  }),
};