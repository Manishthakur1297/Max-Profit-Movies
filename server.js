const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const path = require("path");

const app = express();

//CORS
app.use(cors());

//INIT Middleware
app.use(morgan("dev"));
app.use(express.json({
  extended: false
}));

app.use('/api/movies', require('./routes/movies'));

app.get('/', (req, res) => {
  res.send("Welcome to our Site");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));