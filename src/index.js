const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const userRoutes = require("./routes/user");
const favoritosRoutes = require("./routes/favoritos");
const cors = require("cors");
const app = express();
const port = 9000;

//middleware
app.use(express.json());
app.use(cors());
app.use("/api", userRoutes);
app.use("/api", favoritosRoutes);

//routes
app.get("/", (req, res) => {
	res.send("Welcome to my API");
});

//mongodb connection

mongoose
	.connect(process.env.MONGODB_URI)
	.then(() => console.log("Connected to MongoDB Atlas"))
	.catch((error) => console.log(error));

app.listen(port, () => console.log("server listening on port" + port));
