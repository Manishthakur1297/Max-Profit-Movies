const express = require('express');
const router = express.Router();

const {
    listMovies
} = require('../controllers/movies')


// @route       POST api/movies
// @desc        GET ALL Movies with Max Profit
// @access      Public
router.post('/', listMovies)

module.exports = router;