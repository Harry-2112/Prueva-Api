const mongoose = require("mongoose");

const favoritosSchema = mongoose.Schema({
	id_pokemon: {
		type: String,
		require: true,
	},
});

module.exports = mongoose.model("Favoritos", favoritosSchema);
