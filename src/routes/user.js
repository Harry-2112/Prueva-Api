const express = require("express");
const userSchema = require("../models/user");

const router = express.Router();

//create user
router.post("/users", (req, res) => {
	const user = userSchema(req.body);
	user
		.save()
		.then((data) => res.json(data))
		.catch((error) => res.json({ message: error }));
});

//get all users
router.get("/users", (req, res) => {
	userSchema
		.find()
		.then((data) => res.json(data))
		.catch((error) => res.json({ message: error }));
});

//get a users
router.get("/users/:id", (req, res) => {
	const { id } = req.params;
	userSchema
		.findById(id)
		.then((data) => res.json(data))
		.catch((error) => res.json({ message: error }));
});

//update a users
router.put("/users/:id", (req, res) => {
	const { id } = req.params;
	const { nomb_cliente, email, usuario, contraseña } = req.body;
	userSchema
		.updateOne(
			{ _id: id },
			{
				$set: {
					nomb_cliente,
					email,
					usuario,
					contraseña,
				},
			}
		)
		.then((data) => res.json(data))
		.catch((error) => res.json({ message: error }));
});

//delete a users
router.delete("/users/:id", (req, res) => {
	const { id } = req.params;
	userSchema
		.remove({ _id: id })
		.then((data) => res.json(data))
		.catch((error) => res.json({ message: error }));
});

module.exports = router;