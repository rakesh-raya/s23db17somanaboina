const mongoose = require("mongoose")
const restaurantSchema = mongoose.Schema({
name: String,
cuisine: String,
rating: Number
})
module.exports = mongoose.model("Restaurant",
restaurantSchema)