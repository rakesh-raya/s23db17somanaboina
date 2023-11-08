var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var restaurant_controller = require('../controllers/restaurants');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// RESTAURANT ROUTES ///
// POST request for creating a Restaurant.
router.post('/restaurants', restaurant_controller.restaurant_create_post);
// DELETE request to delete restaurant.
router.delete('/restaurants/:id', restaurant_controller.restaurant_delete);
// PUT request to update restaurant.
router.put('/restaurants/:id', restaurant_controller.restaurant_update_put);
// GET request for one restaurant.
router.get('/restaurants/:id', restaurant_controller.restaurant_detail);
// GET request for list of all restaurant items.
router.get('/restaurants', restaurant_controller.restaurant_list);
module.exports = router;
// API for our resources
exports.api = function(req, res) {
res.write('[');
res.write('{"resource":"restaurants", ');
res.write(' "verbs":["GET","PUT", "DELETE"] ');
res.write('}');
res.write(']')
res.send();
};
