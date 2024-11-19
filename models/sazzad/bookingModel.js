import mongoose from "mongoose";

// Assuming we already have User and Movie models defined
import { User } from './userModel.js';  // Import User model
import { Movie } from './modelSc.js';  // Import Movie model

// Define the Bookings Schema
const bookingSchema = new mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  movie_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Movie',
    required: true
  },
  show_time: {
    type: String,
    required: true
  },
  show_date: {
    type: String,
    required: true
  },
  seats: {
    type: [Number], // Array of numbers for seat numbers
    required: true
  },
  total_price: {
    type: Number,
    required: true
  }
});


// Create the Booking model
export const Booking = mongoose.model('Booking', bookingSchema);
