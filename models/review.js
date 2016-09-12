var mongoose = require('mongoose');

var reviewSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  address: { type: String },
  content: { type: String },
  lat: { type: Number },
  lng: { type: Number },
  rating: { type: Number },
  user: { type: String, required: true, unique: true }
});

module.exports = mongoose.model('Review', reviewSchema);

