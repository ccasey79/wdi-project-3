var mongoose = require('mongoose');
var User = require('../models/user');
var Pet = require('../models/pet');

var databaseUri = require('../config/db')('development');
mongoose.connect(databaseUri);

User.collection.drop();
Pet.collection.drop();

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
  console.log(users.length + " users created!");
  console.log(pet.length + " pet created!");

  mongoose.connection.close();
 });
})



  
    
















