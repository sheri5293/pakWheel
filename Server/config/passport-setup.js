import passport from "passport";
import GoogleStrategy from "passport-google-oauth20";
import { User, Car } from "../models/userModel.js";
import { generateToken } from "../utils/jwtUtils.js";

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "process.env.GOOGLE_CALLBACK_URL",
      scope: ["profile", "email"],
    },
    function (accessToken, refreshToken, profile, callback) {
      callback(null, profile);
    }
  )
);
passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});

export default passport;
