const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const orderSchema = new Schema({
	forWho: String,
	items: [{
		name: String,
		price: Number,
		quantity: Number,
		image: String
	}],
	date: { type: Date, default: Date.now },
	complete: Boolean
});

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
