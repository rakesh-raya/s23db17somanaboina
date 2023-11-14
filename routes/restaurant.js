var express = require('express');
const restaurant_controllers= require('../controllers/restaurants');
var router = express.Router();

// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('restaurant', { title: 'Search Results Restaurant' });
// });

/* GET restaurants */
router.get('/', restaurant_controllers.restaurant_view_all_Page );
router.get('/detail', restaurant_controllers.restaurant_view_one_Page);

module.exports = router;
