const express = require('express');
const router = express.Router();

const {
    listMovies
} = require('../controllers/movies')


// @route       GET api/movies
// @desc        GET ALL Movies with Max Profit
// @access      Public
router.get('/', listMovies)

module.exports = router;