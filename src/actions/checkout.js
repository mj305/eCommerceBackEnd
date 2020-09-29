import orderSchema from "../models/orders.model";

const stripe = require("stripe")("sk_test_eRxFLgrcbFYP939Zq9sUXlIG");

const checkout = async (req, res) => {
  try {
    const { items, subTotal } = req.body;

    console.log(items);

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: "Total",
            },
            unit_amount: subTotal * 100,
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: "https://example.com/success",
      cancel_url: "https://example.com/cancel",
    });

    const newOrder = new orderSchema({
      order: items,
    });
    await newOrder.save();
    console.log(session);
    res.json({ id: session.id });
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      status: "Failed",
      message: "Something went wrong",
    });
  }
};

export default checkout;
