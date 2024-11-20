// import mongoose from 'mongoose';
// import Movie from './modelSc.js';  // Adjust to the correct relative path

// // Function to insert movies
// const insertMovies = async () => {
//   // Connect to MongoDB
//   try {
//     await mongoose.connect("mongodb+srv://moviedb:movie@cluster0.wfjcw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", {
//       dbName: "moviedb",
//     });
//     console.log("Connected to MongoDB");

//     // Define dummy data for 10 movies
//     const dummyMovies = [
//       {
//         name: "Inception",
//         movieId: new mongoose.Types.ObjectId(),
//         year: new Date("2010-07-16"),
//         imageLink: "https://example.com/inception.jpg",
//       },
//       {
//         name: "The Dark Knight",
//         movieId: new mongoose.Types.ObjectId(),
//         year: new Date("2008-07-18"),
//         imageLink: "https://example.com/thedarkknight.jpg",
//       },
//       {
//         name: "Interstellar",
//         movieId: new mongoose.Types.ObjectId(),
//         year: new Date("2014-11-07"),
//         imageLink: "https://example.com/interstellar.jpg",
//       },
//       {
//         name: "The Matrix",
//         movieId: new mongoose.Types.ObjectId(),
//         year: new Date("1999-03-31"),
//         imageLink: "https://example.com/matrix.jpg",
//       },
//       {
//         name: "Avatar",
//         movieId: new mongoose.Types.ObjectId(),
//         year: new Date("2009-12-18"),
//         imageLink: "https://example.com/avatar.jpg",
//       },
//       {
//         name: "The Shawshank Redemption",
//         movieId: new mongoose.Types.ObjectId(),
//         year: new Date("1994-09-23"),
//         imageLink: "https://example.com/shawshank.jpg",
//       },
//       {
//         name: "Forrest Gump",
//         movieId: new mongoose.Types.ObjectId(),
//         year: new Date("1994-07-06"),
//         imageLink: "https://example.com/forrestgump.jpg",
//       },
//       {
//         name: "The Godfather",
//         movieId: new mongoose.Types.ObjectId(),
//         year: new Date("1972-03-24"),
//         imageLink: "https://example.com/godfather.jpg",
//       },
//       {
//         name: "Pulp Fiction",
//         movieId: new mongoose.Types.ObjectId(),
//         year: new Date("1994-10-14"),
//         imageLink: "https://example.com/pulpfiction.jpg",
//       },
//       {
//         name: "Fight Club",
//         movieId: new mongoose.Types.ObjectId(),
//         year: new Date("1999-10-15"),
//         imageLink: "https://example.com/fightclub.jpg",
//       }
//     ];

//     // Insert the dummy data into the MongoDB database
//     await Movie.insertMany(dummyMovies);
//     console.log("Dummy data inserted successfully!");
//   } catch (err) {
//     console.log("Error inserting dummy data:", err);
//   } finally {
//     mongoose.connection.close(); // Close the connection after the operation
//   }
// };

// // Export the function
// export default insertMovies;

import mongoose from 'mongoose';
import { Movie } from './modelSc.js';  // Correct import statement

// Function to insert movies
const insertMovies = async () => {
  // Connect to MongoDB
  try {
    await mongoose.connect("mongodb+srv://moviedb:movie@cluster0.wfjcw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", {
      dbName: "moviedb",
    });
    console.log("Connected to MongoDB");

    // Define dummy data for 20 movies
    const dummyMovies = [
      {
        name: "Inception",
        movieId: new mongoose.Types.ObjectId(),
        year: "2010",
        category: "Sci-Fi",
        type: "Hollywood",
        imageLink: "https://m.media-amazon.com/images/I/71d7d-NSA1L._AC_UF894,1000_QL80_.jpg",
      },
      {
        name: "The Dark Knight",
        movieId: new mongoose.Types.ObjectId(),
        year: "2008",
        category: "Action",
        type: "Hollywood",
        imageLink: "https://m.media-amazon.com/images/I/71d7d-NSA1L._AC_UF894,1000_QL80_.jpg",
      },
      {
        name: "Interstellar",
        movieId: new mongoose.Types.ObjectId(),
        year: "2014",
        category: "Sci-Fi",
        type: "Hollywood",
        imageLink: "https://m.media-amazon.com/images/I/71d7d-NSA1L._AC_UF894,1000_QL80_.jpg",
      },
      {
        name: "The Matrix",
        movieId: new mongoose.Types.ObjectId(),
        year: "1999",
        category: "Action",
        type: "Hollywood",
        imageLink: "https://m.media-amazon.com/images/I/71d7d-NSA1L._AC_UF894,1000_QL80_.jpg",
      },
      {
        name: "Avatar",
        movieId: new mongoose.Types.ObjectId(),
        year: "2009",
        category: "Sci-Fi",
        type: "Hollywood",
        imageLink: "https://m.media-amazon.com/images/I/71d7d-NSA1L._AC_UF894,1000_QL80_.jpg",
      },
      {
        name: "The Shawshank Redemption",
        movieId: new mongoose.Types.ObjectId(),
        year: "1994",
        category: "Drama",
        type: "Hollywood",
        imageLink: "https://m.media-amazon.com/images/I/71d7d-NSA1L._AC_UF894,1000_QL80_.jpg",
      },
      {
        name: "Forrest Gump",
        movieId: new mongoose.Types.ObjectId(),
        year: "1994",
        category: "Drama",
        type: "Hollywood",
        imageLink: "https://m.media-amazon.com/images/I/71d7d-NSA1L._AC_UF894,1000_QL80_.jpg",
      },
      {
        name: "The Godfather",
        movieId: new mongoose.Types.ObjectId(),
        year: "1972",
        category: "Crime",
        type: "Hollywood",
        imageLink: "https://m.media-amazon.com/images/I/71d7d-NSA1L._AC_UF894,1000_QL80_.jpg",
      },
      {
        name: "Pulp Fiction",
        movieId: new mongoose.Types.ObjectId(),
        year: "1994",
        category: "Crime",
        type: "Hollywood",
        imageLink: "https://m.media-amazon.com/images/I/71d7d-NSA1L._AC_UF894,1000_QL80_.jpg",
      },
      {
        name: "Fight Club",
        movieId: new mongoose.Types.ObjectId(),
        year: "1999",
        category: "Drama",
        type: "Hollywood",
        imageLink: "https://m.media-amazon.com/images/I/71d7d-NSA1L._AC_UF894,1000_QL80_.jpg",
      },
      {
        name: "Dilwale Dulhania Le Jayenge",
        movieId: new mongoose.Types.ObjectId(),
        year: "1995",
        category: "Romance",
        type: "Bollywood",
        imageLink: "https://m.media-amazon.com/images/I/71d7d-NSA1L._AC_UF894,1000_QL80_.jpg",
      },
      {
        name: "Kabhi Khushi Kabhie Gham",
        movieId: new mongoose.Types.ObjectId(),
        year: "2001",
        category: "Drama",
        type: "Bollywood",
        imageLink: "https://m.media-amazon.com/images/I/71d7d-NSA1L._AC_UF894,1000_QL80_.jpg",
      },
      {
        name: "3 Idiots",
        movieId: new mongoose.Types.ObjectId(),
        year: "2009",
        category: "Comedy",
        type: "Bollywood",
        imageLink: "https://m.media-amazon.com/images/I/71d7d-NSA1L._AC_UF894,1000_QL80_.jpg",
      },
      {
        name: "Lagaan",
        movieId: new mongoose.Types.ObjectId(),
        year: "2001",
        category: "Drama",
        type: "Bollywood",
        imageLink: "https://m.media-amazon.com/images/I/71d7d-NSA1L._AC_UF894,1000_QL80_.jpg",
      },
      {
        name: "Sholay",
        movieId: new mongoose.Types.ObjectId(),
        year: "1975",
        category: "Action",
        type: "Bollywood",
        imageLink: "https://m.media-amazon.com/images/I/71d7d-NSA1L._AC_UF894,1000_QL80_.jpg",
      },
      {
        name: "PK",
        movieId: new mongoose.Types.ObjectId(),
        year: "2014",
        category: "Comedy",
        type: "Bollywood",
        imageLink: "https://m.media-amazon.com/images/I/71d7d-NSA1L._AC_UF894,1000_QL80_.jpg",
      },
      {
        name: "Bahubali: The Beginning",
        movieId: new mongoose.Types.ObjectId(),
        year: "2015",
        category: "Action",
        type: "Bollywood",
        imageLink: "https://m.media-amazon.com/images/I/71d7d-NSA1L._AC_UF894,1000_QL80_.jpg",
      },
      {
        name: "The Lion King",
        movieId: new mongoose.Types.ObjectId(),
        year: "1994",
        category: "Animation",
        type: "Hollywood",
        imageLink: "https://m.media-amazon.com/images/I/71d7d-NSA1L._AC_UF894,1000_QL80_.jpg",
      },
      {
        name: "Frozen",
        movieId: new mongoose.Types.ObjectId(),
        year: "2013",
        category: "Animation",
        type: "Hollywood",
        imageLink: "https://m.media-amazon.com/images/I/71d7d-NSA1L._AC_UF894,1000_QL80_.jpg",
      },
      {
        name: "Jumanji: Welcome to the Jungle",
        movieId: new mongoose.Types.ObjectId(),
        year: "2017",
        category: "Adventure",
        type: "Hollywood",
        imageLink: "https://m.media-amazon.com/images/I/71d7d-NSA1L._AC_UF894,1000_QL80_.jpg",
      },
      {
        name: "Guardians of the Galaxy",
        movieId: new mongoose.Types.ObjectId(),
        year: "2014",
        category: "Sci-Fi",
        type: "Hollywood",
        imageLink: "https://m.media-amazon.com/images/I/71d7d-NSA1L._AC_UF894,1000_QL80_.jpg",
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
