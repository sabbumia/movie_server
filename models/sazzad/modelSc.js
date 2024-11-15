import mongoose from 'mongoose';

const movieSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  movieId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  year: {
    type: Date,
    required: true,
  },
  imageLink: {
    type: String,
    required: true,
  },
});

// Export the model
const Movie = mongoose.model('Movie', movieSchema);

export default Movie; // Make sure you're using the default export to import it correctly
