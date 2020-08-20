import { Schema, model } from "mongoose";

const userSchema = new Schema({
  firebaseID: {
    type: String,
    unique: true,
  },
  name: String,
  email: {
    type: String,
    unique: true,
  },
});

export default model("user", userSchema);

/* 
Name
email
Address
cc info / payment saved

orders History
cancelled orders History
returns History
*/
