// import { app } from "./app.js";
// import { connectDB } from "./data/database.js";

// /**
//  * Connects to the MongoDB database.
//  */
// connectDB();

// /**
//  * Starts the Express server.
//  * @param {number|string} process.env.PORT - The port number from environment variables.
//  * @param {string} process.env.NODE_ENV - The environment mode (development/production) from environment variables.
//  */
// app.listen(process.env.PORT, () => {
//   console.log(
//     `Server is working on port ${process.env.PORT} in ${process.env.NODE_ENV} mode`
//   );
// });

import { config } from "dotenv";
config({ path: "./data/config.env" }); // Load environment variables

import { app } from "./app.js";
import { connectDB } from "./data/database.js";

// Connect to the database
connectDB();

// Start the server
app.listen(process.env.PORT, () => {
  console.log(
    `Server is working on port ${process.env.PORT} in ${process.env.NODE_ENV} mode`
  );
});
