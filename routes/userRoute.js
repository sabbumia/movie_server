import express from "express";
import { userBooking, getSeatAvailability } from "../controllers/sazzad/bookingController.js"; // Import the new function
const router = express.Router();

// POST route for creating bookings
router.post("/bookings", userBooking);

// GET route for fetching available and booked seats
router.get("/bookings/seats", getSeatAvailability); // New endpoint to fetch seat availability

export default router;
