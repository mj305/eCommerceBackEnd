import { Schema, model } from "mongoose";

const productSchema = new Schema({
  name: String,
  description: String,
  price: Number,
  quantity: Number,
  category: String,
  tags: [String],
  imageURL: String,
});

export default model("product", productSchema);
