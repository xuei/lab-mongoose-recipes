const mongoose = require('mongoose');
const Recipe = require('./models/Recipe'); // Import of the model Recipe from './models/Recipe'
const data = require('./data.js');  // Import of the data from './data.js'

// Connection to the database "recipeApp"
mongoose.connect('mongodb://localhost/recipeApp', { useNewUrlParser: true })
  .then(() => {
    console.log('Connected to Mongo!');
  }).catch(err => {
    console.error('Error connecting to mongo', err);
  });

  Recipe.insertMany(data).then(result => {
       console.log(` recipes: ${result}`);
   });


    Recipe.findByIdAndUpdate("5dd59e53bd8d1817b8251fbe", { $inc: {duration: 100} })
  .then(result=>{
    console.log(` Rigatoni updated ${result}`);
       });

    Recipe.deleteOne({ title: "Carrot Cake"}) .then(result=>{
      console.log(` Recipe deleted ${result}`);
         });


        mongoose.connection.close();
