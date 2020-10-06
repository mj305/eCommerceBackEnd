import cartSchema from "../models/cart.model";

const addtocart = async (req, res) => {
  try {
    const { productID, userID, quantity } = req.body;
    console.log(req.body);
    const newCartItem = new cartSchema({
      productID,
      userID,
      quantity,
    });
    await newCartItem.save();
    return res.status(201).json({
      status: "Success",
      message: "Item Added to Cart",
    });
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      status: "Failed",
      message: "Something went wrong",
    });
  }
};

export default addtocart;
