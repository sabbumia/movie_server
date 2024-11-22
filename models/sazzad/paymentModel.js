// // models/paymentModel.js

// import mongoose from "mongoose";

// // Define the payment schema
// const paymentSchema = new mongoose.Schema(
//   {
//     user_id: {
//       type: mongoose.Schema.Types.ObjectId,
//       ref: 'User', // Reference to the User model
//       required: true,
//     },
//     booking_id: {
//       type: mongoose.Schema.Types.ObjectId,
//       ref: 'Booking', // Reference to the Booking model
//       required: true,
//     },
//     payment_status: {
//       type: String,
//     //   enum: ['Pending', 'Successful', 'Failed'],
//       default: 'Pending',
//       required: true,
//     },
//     amount_paid: {
//       type: Number,
//       required: true,
//     },
//     payment_method: {
//       type: String,
//     //   enum: ['Card', 'Mobile', 'Cash'],
//       required: true,
//     },
//   },
//   { timestamps: true } // Automatically adds createdAt and updatedAt fields
// );

// // Create a Payment model using the schema
// const Payment = mongoose.model('Payment', paymentSchema);

// export default Payment;



import mongoose from "mongoose";

const paymentSchema = new mongoose.Schema(
  {
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User", // Assuming you are using a reference to the User model
      required: true,
    },
    booking_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Booking", // Assuming you are using a reference to the Booking model
      required: true, // This makes the field required
    },
    payment_status: {
      type: String,
      required: true,
    },
    payment_method: {
      type: String,
      required: true, // e.g., 'card', 'mobile', 'cash'
    },
  },
);

const Payment = mongoose.model("Payment", paymentSchema);

export default Payment;
