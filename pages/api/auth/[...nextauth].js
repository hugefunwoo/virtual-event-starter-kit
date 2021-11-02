import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    Providers.Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    })
    // ...add more providers here
  ],
  pages: {
    signIn: '/auth/signin',
    signOut: '/auth/signout'
    // error: '/auth/error', // Error code passed in query string as ?error=
    // verifyRequest: '/auth/verify-request', // (used for check email message)
    // newUser: null // If set, new users will be directed here on first sign in
  },

  callbacks: {
    signIn: async ({ email }) =>
      process.env.NEXT_PUBLIC_PREVIEW_ENABLED && res.setPreviewData({ email }),
    redirect: async url => url
  },
  secret: process.env.AUTH_SECRET,
  debug: process.env.NODE_ENV === 'development'
});
