const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const { readdirSync } = require("fs");
const dotenv = require("dotenv");

dotenv.config();
app.use(cors());

//Routes

readdirSync("./routes").map((r) => app.use("/", require("./routes/" + r)));

//Database

mongoose
  .connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
  })
  .then(() => console.log("Database is successfully connected"))
  .catch((err) => console.log("error connecting to database", err));

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log("server is listening ");
});
