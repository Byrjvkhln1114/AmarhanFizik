const express = require("express");
const cors = require("cors");
const { connectDatabase } = require("./database/database");
const FormulaRouter = require("./router/formularouter");
const QuantityRouter = require("./router/quantityrouter");
const Userrouter = require("./router/userrouter");
const app = express();
const port = 8000;
app.use(express.json());
app.use(cors());
app.use(FormulaRouter, Userrouter, QuantityRouter);
const startServer = async () => {
  await connectDatabase();
  app.listen(port, () => {
    console.log(` Port ${port} der asjinaa `);
  });
};
startServer();
module.exports = app;
