const WomanyProvider = {
  id: "womany",
  name: "Womany",
  type: "oauth",
  version: "2.0",
  scope: "https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/userinfo.email",
  params: { grant_type: "authorization_code" },
  accessTokenUrl: "https://accounts.google.com/o/oauth2/token",
  requestTokenUrl: "https://accounts.google.com/o/oauth2/auth",
  authorizationUrl: "https://accounts.google.com/o/oauth2/auth?response_type=code",
  profileUrl: "https://www.googleapis.com/oauth2/v1/userinfo?alt=json",
  async profile(profile, tokens) {
    // You can use the tokens, in case you want to fetch more profile information
    // For example several OAuth providers do not return email by default.
    // Depending on your provider, will have tokens like `access_token`, `id_token` and or `refresh_token`
    return {
      id: profile.id,
      name: profile.name,
      email: profile.email,
      image: profile.picture
    }
  },
  clientId: "",
  clientSecret: ""
}

export default WomanyProvider;
