var mongoose = require('mongoose');

var petSchema = new mongoose.Schema({
  image: { type: String, required: true },
  name: { type: String, required: true, unique: true },
  breed: { type: String }


}); 


module.exports = mongoose.model('Pet', petSchema);

































