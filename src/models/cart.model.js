import { Schema, model } from "mongoose";

const cartSchema = new Schema({
  productID: String,
  userID: String,
  quantity: Number,
});

export default model("cart", cartSchema);
