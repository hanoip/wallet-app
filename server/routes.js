import { Router } from "express";
import sequelize from "sequelize";
import User from "./models/User";
import Passport from "passport";

const router = Router();

router.get("/login", (req, res) => {
  if (req.isAuthenticated()) {
    const userData = {
      email: req.user.email,
      id: req.user.id,
      document: req.user.document,
      phone: req.user.phone,
      name: req.user.name,
    };
    res.send(userData);
  } else {
    res.sendStatus(401);
  }
});

router.post("/login", Passport.authenticate("local"), (req, res) => {
  User.findByPk(req.user.id).then((user) => {
    const userData = {
      email: user.email,
      id: user.id,
      document: user.document,
      phone: user.phone,
      name: user.name,
    };
    res.status(200).send({ user: userData });
  });
});

router.get("/logout", (req, res) => {
  if (req.isAuthenticated()) {
    req.logout();
    res.sendStatus(200);
  }
});

router.post("/register", (req, res) => {
  User.create(req.body)
    .then(() => {
      res.sendStatus(201);
    })
    .catch((error) => res.send(error));
});

router.post("/balance", (req, res) => {
  const userData = { document: req.body.document, phone: req.body.phone };
  User.findOne({ where: userData }).then((user) => {
    res.status(200).send({ balance: user.balance });
  });
});

router.put("/deposit", (req, res) => {
  const userData = { document: req.body.document, phone: req.body.phone };
  User.update(
    { balance: sequelize.literal(`balance + ${req.body.value}`) },
    { returning: true, where: userData }
  ).then(([rowsUpdate, [updatedUser]]) => {
    res.status(200).send({ balance: updatedUser.balance });
  });
});

export default router;
