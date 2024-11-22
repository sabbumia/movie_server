import express from "express";
import { userBooking, getSeatAvailability } from "../controllers/sazzad/bookingController.js"; // Import the new function
import { createPayment } from "../controllers/sazzad/paymentController.js";

const router = express.Router();

// POST route for creating bookings
router.post("/bookings", userBooking);

// GET route for fetching available and booked seats
router.get("/bookings/seats", getSeatAvailability); // New endpoint to fetch seat availability



// POST route to create a payment record
router.post("/payments", createPayment);

export default router;
