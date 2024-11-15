import mongoose from 'mongoose';
import Movie from './modelSc.js';  // Adjust to the correct relative path

// Function to insert movies
const insertMovies = async () => {
  // Connect to MongoDB
  try {
    await mongoose.connect("mongodb+srv://moviedb:movie@cluster0.wfjcw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", {
      dbName: "moviedb",
    });
    console.log("Connected to MongoDB");

    // Define dummy data for 10 movies
    const dummyMovies = [
      {
        name: "Inception",
        movieId: new mongoose.Types.ObjectId(),
        year: new Date("2010-07-16"),
        imageLink: "https://example.com/inception.jpg",
      },
      {
        name: "The Dark Knight",
        movieId: new mongoose.Types.ObjectId(),
        year: new Date("2008-07-18"),
        imageLink: "https://example.com/thedarkknight.jpg",
      },
      {
        name: "Interstellar",
        movieId: new mongoose.Types.ObjectId(),
        year: new Date("2014-11-07"),
        imageLink: "https://example.com/interstellar.jpg",
      },
      {
        name: "The Matrix",
        movieId: new mongoose.Types.ObjectId(),
        year: new Date("1999-03-31"),
        imageLink: "https://example.com/matrix.jpg",
      },
      {
        name: "Avatar",
        movieId: new mongoose.Types.ObjectId(),
        year: new Date("2009-12-18"),
        imageLink: "https://example.com/avatar.jpg",
      },
      {
        name: "The Shawshank Redemption",
        movieId: new mongoose.Types.ObjectId(),
        year: new Date("1994-09-23"),
        imageLink: "https://example.com/shawshank.jpg",
      },
      {
        name: "Forrest Gump",
        movieId: new mongoose.Types.ObjectId(),
        year: new Date("1994-07-06"),
        imageLink: "https://example.com/forrestgump.jpg",
      },
      {
        name: "The Godfather",
        movieId: new mongoose.Types.ObjectId(),
        year: new Date("1972-03-24"),
        imageLink: "https://example.com/godfather.jpg",
      },
      {
        name: "Pulp Fiction",
        movieId: new mongoose.Types.ObjectId(),
        year: new Date("1994-10-14"),
        imageLink: "https://example.com/pulpfiction.jpg",
      },
      {
        name: "Fight Club",
        movieId: new mongoose.Types.ObjectId(),
        year: new Date("1999-10-15"),
        imageLink: "https://example.com/fightclub.jpg",
      }
    ];

    // Insert the dummy data into the MongoDB database
    await Movie.insertMany(dummyMovies);
    console.log("Dummy data inserted successfully!");
  } catch (err) {
    console.log("Error inserting dummy data:", err);
  } finally {
    mongoose.connection.close(); // Close the connection after the operation
  }
};

// Export the function
export default insertMovies;
