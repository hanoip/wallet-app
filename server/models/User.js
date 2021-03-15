import { Model, STRING, INTEGER } from "sequelize";
import db from "./db.js";
import { randomBytes, createHmac } from "crypto";
class User extends Model {}
User.init(
  {
    email: {
      type: STRING,
      allowNull: false,
      unique: true,
      validate: { isEmail: true },
    },
    document: {
      type: STRING,
      allowNull: false,
    },
    name: {
      type: STRING,
      allowNull: false,
    },
    phone: {
      type: STRING,
      allowNull: false,
    },
    password: {
      type: STRING,
      allowNull: false,
    },
    balance: {
      type: INTEGER,
      defaultValue: 0,
    },
    salt: {
      type: STRING,
    },
  },
  { sequelize: db, modelName: "user" }
);

User.addHook("beforeCreate", (user) => {
  user.salt = randomBytes(20).toString("hex");
  user.password = user.hashPassword(user.password);
});
User.prototype.hashPassword = function (password) {
  return createHmac("sha1", this.salt).update(password).digest("hex");
};
User.prototype.validPassword = function (password) {
  return this.password === this.hashPassword(password);
};
export default User;
