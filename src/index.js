import "dotenv/config";
import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";

const app = express();
const port = process.env.PORT;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

mongoose.connect(process.env.DBURL, { useNewUrlParser: true });

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log("MongoDB Connected!");
});

app.get("/", (req, res) => {
  return res.status(201).json({ name: "Hello World" });
});

app.post("/signup", (req, res) => {
  const { email, userUID } = req.body;
  return res.status(201).json({ message: "Success" });
});

app.listen(port, () => {
  console.log(`We are live at http://localhost:${port}`);
});
