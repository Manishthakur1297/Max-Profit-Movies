const maxProfitMovies = require('../utils/utils')

// @route       GET api/movies
// @desc        GET ALL Movies with Max Profit
// @access      Public

exports.listMovies = async (req, res) => {
    try {
        let data = req.body;
        if (data.length != 0) {
            let movies = maxProfitMovies(data)
            return res.json(movies)
        }

        return res.status(404).send("No Movies Found!!!")
    } catch (error) {
        console.log(error.message)
        return res.status(500).send("Server Error!!")
    }
}