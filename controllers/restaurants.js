var Restaurant = require('../models/restaurantSchema');
// List of all Restaurants
exports.restaurant_list = function(req, res) {
res.send('NOT IMPLEMENTED: Restaurant list');
};
// for a specific Restaurant.
exports.restaurant_detail = function(req, res) {
res.send('NOT IMPLEMENTED: Restaurant detail: ' + req.params.id);
};
// Handle Restaurant create on POST.
exports.restaurant_create_post = function(req, res) {
res.send('NOT IMPLEMENTED: Restaurant create POST');
};
// Handle Restaurant delete form on DELETE.
exports.restaurant_delete = function(req, res) {
res.send('NOT IMPLEMENTED: Restaurant delete DELETE ' + req.params.id);
};
// Handle Restaurant update form on PUT.
exports.restaurant_update_put = function(req, res) {
res.send('NOT IMPLEMENTED: Restaurant update PUT' + req.params.id);
};