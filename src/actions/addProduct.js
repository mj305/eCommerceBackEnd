import productSchema from "../models/product.model";

const addProduct = async (req, res) => {
  try {
    const { name, description, price, quantity, category, tags } = req.body;
    console.log(req.body);
    const newProduct = new productSchema({
      name,
      description,
      price,
      quantity,
      category,
    });
    await newProduct.save();
    return res.status(201).json({
      status: "Success",
      message: "Product Added",
    });
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      status: "Failed",
      message: "Something went wrong",
    });
  }
};

export default addProduct;
