// Require import
const express = require("express");
require("dotenv").config();


// instance d'express
const app = express();

// middleware
app.use(express.json());

// Connection BD
const connectDB = require("./config/connectDB");

// Routes — FIXED: Added leading slash
app.use("/api/auth", require("./routes/auth.routes"));
// app.use("/api/auth", require(""))

app.use("/api/product", require('./routes/prod.routes'))


// ---------------------------FIN DE PAGE---------------------------

// Port
const PORT = process.env.PORT || 4000; // Added fallback just in case

// Start server after DB connection
const startServer = async () => {
    try {
        await connectDB();
        app.listen(PORT, () =>
            console.log(`The server is running on http://localhost:${PORT}`)
        );
    } catch (error) {
        console.error("Failed to start server:", error);
        process.exit(1);
    }
};

startServer();