require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./db/connection');
const authRouter = require('./routes/authRouter');

const app = express();

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/api', authRouter);

// Connect to the database
connectDB();

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});