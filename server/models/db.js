import Sequelize from "sequelize";

const db = new Sequelize("postgres://@localhost:5432/wallet", {
  dialect: "postgres",
  logging: false,
});

export default db;
