const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const recipeSchema = new Schema({
  title: {type: String}, 
  level: {type: String, enum: ["Easy Peasy","Amateur Chef", "UltraPro Chef"]},  // Only can be one of the following values: Easy Peasy - Amateur Chef - UltraPro Chef (remember the ENUM 😉)
ingredients: {type: Array}, 
cuisine: {type: String}, 
dishType: {type: String, enum: ["Breakfast", "Dish", "Snack", "Drink", "Dessert", " Other"]},
image: {type: String, default: "https://images.media-allrecipes.com/images/75131.jpg" }, 
duration: {type: Number, Min:0}, // Min value should be 0.
creator: {type: String},
created: {type: Date, default: Date}, 
  // TODO: write the schema
});

const Recipe = mongoose.model('Recipe', recipeSchema);
module.exports = Recipe;
