import productSchema from "../models/product.model";

const viewSingleProduct = async (req, res) => {
  try {
    const id = req.params.id;

    const product = await productSchema.findById(id);

    return res.status(201).json({
      status: "Success",
      message: "Product Found",
      data: product,
    });
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      status: "Failed",
      message: "Something went wrong",
      data: null,
    });
  }
};

export default viewSingleProduct;
