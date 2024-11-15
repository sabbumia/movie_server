import mongoose from "mongoose";


console.log("MONGO_URI:", process.env.MONGODB_URI);
/**
 * Connects to the MongoDB database.
 * @returns {Promise<void>}  when the database is connected promise is resolved.
 */
export const connectDB = () => {
  mongoose
    .connect("mongodb+srv://moviedb:movie@cluster0.wfjcw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", {
      dbName: "moviedb",
    })
    .then((connection) => {
      console.log(
        `Database connected successfully with ${connection.connection.host}`
      );
    })
    .catch((error) => {
      console.error(error);
    });

};


