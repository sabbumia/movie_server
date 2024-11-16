// import { Booking } from "../../models/sazzad/bookingModel.js"; // Import Booking model
// import { User } from "../../models/sazzad/userModel.js";
// import { Movie } from "../../models/sazzad/modelSc.js"; // Import Movie model

/**
 * Handles booking creation.
 * @param {Object} req - Request object.
 * @param {Object} res - Response object.
 */
// export const userBooking = async (req, res) => {
//   try {
//     const { user_id, movie_id, show_time, date, seats, total_price } = req.body;

//     // Log the incoming data for debugging
//     console.log('Booking request data:', req.body);

//     // Validate required fields
//     if (!user_id || !movie_id || !show_time || !date || total_price === undefined) {
//       return res.status(400).json({ message: "Missing required fields" });
//     }

//     // Validate user existence
//     const user = await User.findById(user_id);
//     if (!user) {
//       return res.status(404).json({ message: "User not found." });
//     }

//     // Validate movie existence
//     const movie = await Movie.findById(movie_id);
//     if (!movie) {
//       return res.status(404).json({ message: "Movie not found." });
//     }

//     // Create a new booking
//     const newBooking = new Booking({
//       user_id,
//       movie_id,
//       show_time: new Date(`${date}T${show_time}`), // Make sure show_time is a Date object
//       date: new Date(date), // Ensure date is a Date object
//       seats: seats || {}, // Ensure seats is an optional field
//       total_price,
//     });

//     // Save the booking
//     await newBooking.save();

//     res.status(201).json({
//       success: true,
//       message: "Booking confirmed successfully.",
//       booking: newBooking,
//     });
//   } catch (error) {
//     // Log the error to understand what went wrong
//     console.error('Error during booking:', error);

//     res.status(500).json({ message: "Server error.", error: error.message });
//   }
// };





















import mongoose from 'mongoose';
import { Booking } from "../../models/sazzad/bookingModel.js"; // Import Booking model
import { User } from "../../models/sazzad/userModel.js"; // Import User model
import { Movie } from "../../models/sazzad/modelSc.js"; // Import Movie model

export const userBooking = async (req, res) => {
  try {
    const { user_id, movie_id, show_time, date, seats, total_price } = req.body;

    // Log the incoming data for debugging
    console.log('Booking request data:', req.body);

    // Validate required fields
    if (!user_id || !movie_id || !show_time || !date || total_price === undefined) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    // Ensure that the user_id and movie_id are valid ObjectIds
    const userObjectId = user_id; // Use 'new' to instantiate ObjectId
    // const userObjectId = new mongoose.Types.ObjectId(user_id); // Use 'new' to instantiate ObjectId
    const movieObjectId = '673799b9da8ef4e6a1bf4c28'; // Use 'new' to instantiate ObjectId
    // const movieObjectId = new mongoose.Types.ObjectId(movie_id); // Use 'new' to instantiate ObjectId

    // Validate user existence
    const user = await User.findById(userObjectId);
    if (!user) {
      return res.status(404).json({ message: "User not found." });
    }

    // Validate movie existence
    const movie = await Movie.findById(movie_id);
    if (!movie) {
      return res.status(404).json({ message: "Movie not found." });
    }

    // Create a new booking
    const newBooking = new Booking({
      user_id: userObjectId, // Use ObjectId for user_id
      movie_id: movie_id, // Use ObjectId for movie_id
      show_time: new Date(`${date}T${show_time}`), // Ensure show_time is a Date object
      date: new Date(date), // Ensure date is a Date object
      seats: seats || {}, // Ensure seats is an optional field
      total_price,
    });

    // Save the booking
    await newBooking.save();

    res.status(201).json({
      success: true,
      message: "Booking confirmed successfully.",
      booking: newBooking,
    });
  } catch (error) {
    // Log the error to understand what went wrong
    console.error('Error during booking:', error);

    res.status(500).json({ message: "Server error.", error: error.message });
  }
};










/**
 * Fetches seat availability for a given movie, date, and time.
 * @param {Object} req - Request object.
 * @param {Object} res - Response object.
 */
export const getSeatAvailability = async (req, res) => {
  try {
    const { movieId, date, time } = req.query;

    // Validate required fields
    if (!movieId || !date || !time) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    // Fetch the booked seats for the selected movie, date, and time
    const bookings = await Booking.find({
      movie_id: movieId,
      date: new Date(date),
      show_time: new Date(`${date}T${time}`)
    });

    // Array to keep track of the booked seats
    let bookedSeats = [];

    bookings.forEach(booking => {
      // Assuming seats are stored as an array of seat numbers
      if (booking.seats) {
        bookedSeats.push(...Object.keys(booking.seats));
      }
    });

    // Generate seat status for 30 seats (adjust as needed)
    const seatsStatus = Array.from({ length: 30 }, (_, i) => {
      if (bookedSeats.includes(i.toString())) {
        return 'booked'; // Seat is booked
      }
      return 'available'; // Seat is available
    });

    res.status(200).json({ seats: seatsStatus });
  } catch (error) {
    res.status(500).json({ message: "Server error.", error: error.message });
  }
};
