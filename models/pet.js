var mongoose = require('mongoose');

var petSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  breed: { type: String },
  colour: { type: String },
  age: { type: Number }
}); 


module.exports = mongoose.model('Pet', petSchema);

































