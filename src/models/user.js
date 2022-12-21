const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
	nomb_cliente: {
		type: String,
		require: true,
	},
	correo: {
		type: Number,
		require: true,
	},
	usuario: {
		type: String,
		require: true,
	},
	contraseña: {
		type: String,
		require: true,
	},
});

module.exports = mongoose.model("User", userSchema);
