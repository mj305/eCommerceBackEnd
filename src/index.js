import "dotenv/config";
import cors from "cors";
import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import signUp from "./actions/signUp";
import addProduct from "./actions/addProduct";
import viewProduct from "./actions/viewProduct";
import vewSingleProduct from "./actions/vewSingleProduct";
import checkout from "./actions/checkout";
import addtocart from "./actions/addtocart";

const app = express();
const port = process.env.PORT;
app.use(cors());

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

app.post("/signup", signUp);
app.post("/addProduct", addProduct);
app.get("/viewProduct", viewProduct);
app.get("/viewProduct/:id", vewSingleProduct);
app.post("/checkout", checkout);
app.post("/addtocart", addtocart);

app.listen(port, () => {
  console.log(`We are live at http://localhost:${port}`);
});
