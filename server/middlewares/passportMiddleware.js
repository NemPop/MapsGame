// import passport from "passport";
// import { Strategy as GoogleStrategy } from "passport-google-oauth20";

// passport.use(
//   new GoogleStrategy(
//     {
//       callbackURL: "http://localhost:3001/auth/google/callback",
//       clientID:
//         "499314077621-n7klfql9rfd8ho7kl26bu6p1vf9fgg5h.apps.googleusercontent.com",
//       clientSecret: "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",
//     },
//     (accessToken, refreshToken, profile, done) => {
//       console.log(profile, "profile");
//       done(null, user);
//     }
//   )
// );
// passport.serializeUser((user, done) => {
//   if (user) return done(null, user);
//   else return done(null, false);
// });
// passport.deserializeUser((id, done) => {
//   if (user) return done(null, user);
//   else return done(null, false);
// })((module.exports = passport));

// export default passport;
