import path from "path";
import express from "express";
import session from "express-session";
import cookieParser from "cookie-parser";
import passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";
import db from "./models/db";
import routes from "./routes.js";
import User from "./models/User";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(session({ secret: "pepinillo" }));
app.use(passport.initialize());
app.use(passport.session());

passport.use(
  new LocalStrategy(
    {
      usernameField: "email",
      passwordField: "password",
    },
    (inputEmail, inputPassword, done) => {
      User.findOne({ where: { email: inputEmail } })
        .then((user) => {
          if (!user) {
            return done(null, false, { message: "Incorrect username." });
          }
          if (!user.validPassword(inputPassword)) {
            return done(null, false, { message: "Incorrect password." });
          }
          return done(null, user);
        })
        .catch(done);
    }
  )
);
passport.serializeUser((user, done) => {
  done(null, user.id);
});
passport.deserializeUser((id, done) => {
  User.findByPk(id).then((user) => done(null, user));
});

app.use("/api", routes);
db.sync().then(() => {
  app.listen(3001, () => {
    console.log("server running on Port 3001 :)");
  });
});

app.use((err, req, res, next) => {
  console.error(err, typeof next);
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || "Internal server error.");
});
