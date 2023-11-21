const mongoose = require("mongoose")
const restaurantSchema = mongoose.Schema({
name: String,
cuisine: String,
rating: {type: Number, min: 0, max: 5}
})
module.exports = mongoose.model("Restaurant",
restaurantSchema)