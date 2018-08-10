const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const itemSchema = new Schema({
	category: String,
	desc: String,
	name: { type: String, required: true },
	price: { type: Number, required: true },
	image: String
});

const Item = mongoose.model("Item", itemSchema);
module.exports = Item;
