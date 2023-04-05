const express = require("express");
const cors = require("cors");
const { connectDatabase } = require("./database/database");
const FormulaRouter = require("./router/formularouter");
const userRouter = require("./router/userrouter");
const app = express();
const port = 8000;
app.use(express.json());
app.use(cors());
app.use(FormulaRouter);
app.use(userRouter);
const startServer = async () => {
  await connectDatabase();
  app.listen(port, () => {
    console.log(` Port ${port} der asjinaa sdaaa`);
  });
};
startServer();
module.exports = app;
