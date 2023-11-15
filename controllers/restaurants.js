var Restaurant = require('../models/restaurantSchema');
// List of all Restaurants
// exports.restaurant_list = function(req, res) {
// res.send('NOT IMPLEMENTED: Restaurant list');
// };
// List of all Costumes
exports.restaurant_list = async function(req, res) {
    try{
    theRestaurants = await Restaurant.find();
    res.send(theRestaurants);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };

    // VIEWS
// Handle a show all view
exports.restaurant_view_all_Page = async function(req, res) {
try{
theRestaurants = await Restaurant.find();
res.render('restaurant', { title: 'Restaurant Search Results', results: theRestaurants });
}
catch(err){
res.status(500);
res.send(`{"error": ${err}}`);
}
};

// Handle a show one view with id specified by query
exports.restaurant_view_one_Page = async function(req, res) {
    console.log("single view for id " + req.query.id)
    try{
    result = await Restaurant.findById(req.query.id)
    res.render('restaurantdetail',
    { title: 'Restaurant Detail', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };

// Handle building the view for creating a restaurant.
// No body, no in path parameter, no query.
// Does not need to be async
exports.restaurant_create_Page = function(req, res) {
    console.log("create view")
    try{
    res.render('restaurantcreate', { title: 'Restaurant Create'});
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };
    
    // Handle building the view for updating a restaurant.
// query provides the id
exports.restaurant_update_Page = async function(req, res) {
    console.log("update view for item "+ req.query.id)
    try{
    let result = await Restaurant.findById(req.query.id)
    res.render('restaurantupdate', { title: 'Restaurant Update', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };

// Handle Restaurant create on POST.
exports.restaurant_create_post = async function(req, res) {
console.log(req.body)
let document = new Restaurant();
// We are looking for a body, since POST does not have query parameters.
// Even though bodies can be in many different formats, we will be picky
// and require that it be a json object
// {"name":"Meridian", "cuisine": "Russian", "rating": 4.6}
document.name = req.body.name;
document.cuisine = req.body.cuisine;
document.rating = req.body.rating;
try{
let result = await document.save();
res.send(result);
}
catch(err){
res.status(500);
res.send(`{"error": ${err}}`);
}
};


    
// for a specific Restaurant.
// exports.restaurant_detail = function(req, res) {
// res.send('NOT IMPLEMENTED: Restaurant detail: ' + req.params.id);
// };
// for a specific Restaurant.
exports.restaurant_detail = async function(req, res) {
console.log("detail" + req.params.id)
try {
result = await Restaurant.findById(req.params.id)
res.send(result)
} catch (error) {
res.status(500)
res.send(`{"error": document for id ${req.params.id} not found`);
}
};

// Handle Restaurant create on POST.
// exports.restaurant_create_post = function(req, res) {
// res.send('NOT IMPLEMENTED: Restaurant create POST');
// };
// Handle Restaurant delete form on DELETE.
// exports.restaurant_delete = function(req, res) {
// res.send('NOT IMPLEMENTED: Restaurant delete DELETE ' + req.params.id);
// };

// Handle Restaurant delete on DELETE.
exports.restaurant_delete = async function(req, res) {
    console.log("delete " + req.params.id)
    try {
    result = await Restaurant.findByIdAndDelete(req.params.id)
    console.log("Removed " + result)
    res.send(result)
    } catch (err) {
    res.status(500)
    res.send(`{"error": Error deleting ${err}}`);
    }
    };
    

// Handle Restaurant update form on PUT.
// exports.restaurant_update_put = function(req, res) {
// res.send('NOT IMPLEMENTED: Restaurant update PUT' + req.params.id);
// };
// Handle Costume update form on PUT.
exports.restaurant_update_put = async function(req, res) {
console.log(`update on id ${req.params.id} with body
${JSON.stringify(req.body)}`)
try {
let toUpdate = await Restaurant.findById(req.params.id)
// Do updates of properties
if(req.body.name) toUpdate.name = req.body.name;
if(req.body.cuisine) toUpdate.cuisine = req.body.cuisine;
if(req.body.rating) toUpdate.rating = req.body.rating;
let result = await toUpdate.save();
console.log("Sucess " + result)
res.send(result)
} catch (err) {
res.status(500)
res.send(`{"error": ${err}: Update for id ${req.params.id}
failed`);
}
};