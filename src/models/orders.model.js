import { Schema, model } from "mongoose";

const orderSchema = new Schema({
  order: [
    {
      id: String,
      title: String,
      count: Number,
      price: Number,
    },
  ],
});

export default model("orders", orderSchema);
