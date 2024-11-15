import Movie from "../../models/sazzad/modelSc.js"; // Corrected import path

export const movieLIST = {
  async getAllMovie(req, res) {
    try {
      const movies = await Movie.find();
      res.status(200).json({ success: true, data: movies });
    } catch (err) {
      res.status(500).json({ success: false, message: err.message });
    }
  },
};
