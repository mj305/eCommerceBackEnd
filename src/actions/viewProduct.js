import productSchema from "../models/product.model";

const viewProduct = async (req, res) => {
  try {
    const allProducts = await productSchema.find({});

    return res.status(201).json({
      status: "Success",
      message: "Product Found",
      data: allProducts,
    });
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      status: "Failed",
      message: "Something went wrong",
    });
  }
};

export default viewProduct;
