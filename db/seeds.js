var mongoose = require('mongoose');
var User = require('../models/user');
var Pet = require('../models/pet');
var Review = require('../models/review');

var databaseUri = require('../config/db')('development');
mongoose.connect(databaseUri);

User.collection.drop();
Pet.collection.drop();
Review.collection.drop();

User.create([
  {
    username: "ccasey79",
    email: "chris@chris.com",
    password: "password",
    passwordConfirmation: "password"
  }
], function(err, users) {
Pet.create([
  {
    name: "Charlie",
    breed: "West Highland Terrier",
    colour: "White",
    age: 5
  }
], function(err, pet) {
Review.create([
  {
    name: "Caister Point Beach",
    address: "Great Yarmouth",
    content: "Sandy beach with cafe and restaurant facilities",
    lat: 36.466684,
    lng: -94.273045,
    rating: 4,
    user: "Bob Brown",
    image: "http://www.thebeachguide.co.uk/public/geophotos/1863011.jpg"
  }
], function(err, review) {    
  console.log(users.length + " users created!");
  console.log(pet.length + " pet created!");
  console.log(review.length + " review created!");

  mongoose.connection.close();
    });
  });
});


  
    
















