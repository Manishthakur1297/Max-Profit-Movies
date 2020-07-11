// @route       GET api/movies
// @desc        GET ALL Movies with Max Profit
// @access      Public
exports.listMovies = async (req, res) => {
    try {

        return res.json("Message Recieved")

    } catch (error) {
        console.log(error.message)
        res.status(500).send("Server Error!!")
    }
}