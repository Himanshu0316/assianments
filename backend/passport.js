const GoogleStrategy = require('passport-google-oauth20').Strategy;
const passport = require("passport")
const GOOGLE_CLIENT_ID = "182881394342-2dd9e58kf9vo2vpu38lg1rngebvljvoa.apps.googleusercontent.com"
const GOOGLE_CLIENT_SECRET = "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"

passport.use(new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "/auth/google/callback"
  },
  function(accessToken, refreshToken, profile, done) {
   done(null,profile)
//    const user = {
//     username:profile.displayName,
//     avatar:profile.photos[0],
//    }
//    user.save()
  }
));

passport.serializeUser((user,done)=>{
    done(null,user)
})
passport.deserializeUser((user,done)=>{
    done(null,user)
})