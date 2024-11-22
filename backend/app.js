const mongoose = require('mongoose');
const express = require("express");
require('dotenv').config();
const cors = require("cors");
const app = express();
const ApiRouter = require("./routers/router");

// Load MongoDB URI from environment variables
const DB_URI = process.env.DB_URI;

// Connect to MongoDB
mongoose.connect(DB_URI, {
    // useNewUrlParser: true,
    // useCreateIndex: true,
    // useUnifiedTopology: true,
    // useFindAndModify: false
}).then(() => {
    console.log("Connected to MongoDB successfully");
}).catch((err) => console.error("Failed to connect to MongoDB:", err));

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(ApiRouter);

// Start server
const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
