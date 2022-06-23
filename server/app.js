const express = require("express");
const cors = require("cors");
const colors = require("colors");
const app = express();
const dotenv = require("dotenv").config();
const { errorHandler } = require("./middleware/errorMiddleware");
const { connectDB } = require("./config/db");

connectDB();

app.use(cors());
app.use(express.json());
app.use("/api/user", require("./routes/userRoutes"));

app.use(errorHandler);

module.exports = app;
