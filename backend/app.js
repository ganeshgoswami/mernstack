const mongoose = require('mongoose');
const express = require("express");
require('dotenv').config();
const cors = require("cors");
const app = express();
const ApiRouter = require("./routers/router");


const DB_URI = process.env.DB_URI;

// Connect to MongoDB
mongoose.connect(DB_URI, {
}).then(() => {
    console.log("Connected to MongoDB successfully");
}).catch((err) => console.error("Failed to connect to MongoDB:", err));

// Middleware
const corsOptions = {
    origin: ["http://localhost:3000", "https://badwap.fun"], // Allow these origins
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
    allowedHeaders: ["Content-Type", "Authorization"],
};
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/api',ApiRouter);



// server Start
const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
