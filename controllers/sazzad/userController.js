import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { User } from "../../models/sazzad/userModel.js";

/**
 * Registers a new user.
 * @function
 * @param {Object} req - Request object.
 * @param {Object} res - Response object.
 */
export const registerUser = async (req, res) => {
  try {
    const { name, email, password, phone } = req.body;

    // Validate inputs
    if (!name || !email || !password || !phone) {
      return res.status(400).json({ message: "All fields are required." });
    }

    // Check if the user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists." });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create the user
    const newUser = await User.create({
      name,
      email,
      password: hashedPassword,
      phone,
    });

    return res.status(201).json({
      success: true,
      message: "User registered successfully.",
      userId: newUser._id,
    });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error.", error });
  }
};

/**
 * Logs in a user.
 * @function
 * @param {Object} req - Request object.
 * @param {Object} res - Response object.
 */
export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Validate inputs
    if (!email || !password) {
      return res.status(400).json({ message: "Email and password are required." });
    }

    // Find the user
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found." });
    }

    // Compare passwords
    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    if (!isPasswordCorrect) {
      return res.status(401).json({ message: "Invalid credentials." });
    }

    // Generate JWT token
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    // Send the response
    return res.status(200).json({
      success: true,
      message: "Login successful.",
      token,
    });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error.", error });
  }
};

/**
 * Logs out a user by clearing cookies or tokens.
 * @function
 * @param {Object} req - Request object.
 * @param {Object} res - Response object.
 */
export const logoutUser = (req, res) => {
  try {
    res.clearCookie("token");
    return res.status(200).json({ success: true, message: "Logout successful." });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error.", error });
  }
};
