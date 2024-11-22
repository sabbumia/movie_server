// controllers/paymentController.js

import Payment from "../../models/sazzad/paymentModel.js";

// Controller to create a payment record
export const createPayment = async (req, res) => {
  const { user_id, booking_id, payment_status, amount_paid, payment_method } = req.body;

  try {
    // Create a new payment document
    const newPayment = new Payment({
      user_id,
      booking_id,
      payment_status,
      amount_paid,
      payment_method,
    });



    // Save payment to the database
    const savedPayment = await newPayment.save();

    // Send back the saved payment data in the response
    res.status(201).json({
      message: "Payment recorded successfully",
      payment: savedPayment,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Error recording payment",
      error: error.message,
    });
  }
};
