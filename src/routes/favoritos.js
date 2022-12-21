const express = require("express");
const favoritosSchema = require("../models/favoritos");

const router = express.Router();

//create user
router.post("/favoritos", (req, res) => {
	const favoritos = favoritosSchema(req.body);
	favoritos
		.save()
		.then((data) => res.json(data))
		.catch((error) => res.json({ message: error }));
});

//get all users
router.get("/favoritos", (req, res) => {
	favoritosSchema
		.find()
		.then((data) => res.json(data))
		.catch((error) => res.json({ message: error }));
});

//get a users
router.get("/favoritos/:id", (req, res) => {
	const { id } = req.params;
	favoritosSchema
		.findById(id)
		.then((data) => res.json(data))
		.catch((error) => res.json({ message: error }));
});

//update a users
router.put("/favoritosSchema/:id", (req, res) => {
	const { id } = req.params;
	const { id_pokemon } = req.body;
	favoritosSchema
		.updateOne(
			{ _id: id },
			{
				$set: {
					id_pokemon,
				},
			}
		)
		.then((data) => res.json(data))
		.catch((error) => res.json({ message: error }));
});

//delete a users
router.delete("/favoritos/:id", (req, res) => {
	const { id } = req.params;
	favoritosSchema
		.remove({ _id: id })
		.then((data) => res.json(data))
		.catch((error) => res.json({ message: error }));
});

module.exports = router;
