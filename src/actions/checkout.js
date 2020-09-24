const stripe = require("stripe")("sk_test_eRxFLgrcbFYP939Zq9sUXlIG");

const checkout = async (req, res) => {
  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: "T-shirt",
            },
            unit_amount: 2000,
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: "https://example.com/success",
      cancel_url: "https://example.com/cancel",
    });

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
