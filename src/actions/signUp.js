import userSchema from "../models/user.model";
const signUp = async (req, res) => {
  try {
    const { email, firebaseID } = req.body;
    const newUser = new userSchema({
      email,
      firebaseID,
    });
    await newUser.save();
    return res.status(201).json({
      status: "Success",
      message: "User was created,",
    });
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      status: "Failed",
      message: "Something went wrong",
    });
  }
};

export default signUp;
