var express = require('express');
const restaurant_controllers= require('../controllers/restaurants');
var router = express.Router();
const secured = (req, res, next) => {
    if (req.user){
    return next();
    }
    res.redirect("/login");
    }
// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('restaurant', { title: 'Search Results Restaurant' });
// });

/* GET restaurants */
router.get('/', restaurant_controllers.restaurant_view_all_Page );
/* GET detail restaurant page */
router.get('/detail', restaurant_controllers.restaurant_view_one_Page);
/* GET create restaurant page */
router.get('/create',secured, restaurant_controllers.restaurant_create_Page);
/* GET create update page */
router.get('/update',secured, restaurant_controllers.restaurant_update_Page);
/* GET delete restaurant page */
router.get('/delete',secured, restaurant_controllers.restaurant_delete_Page);


module.exports = router;
