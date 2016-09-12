var Review = require('../models/review');

function reviewIndex(req, res) {
  Review.find(function(err, reviews) {
    if(err) return res.status(500).json(err);
    return res.status(200).json(reviews);
  });
}

function reviewCreate(req, res) {
  Review.create(req.body, function(err, review) {
    if(err) return res.status(400).json(err);
    return res.status(201).json(review);
  });
}

function reviewShow(req, res) {
  Review.findById(req.params.id, function(err, review) {
    if(err) return res.status(500).json(err);
    if(!review) return res.status(404).json({ message: "Could not find a user with that id" });
    return res.status(200).json(review);
  });
}

function reviewUpdate(req, res) {
  Review.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true }, function(err, review) {
    if(err) return res.status(400).json(err);
    return res.status(200).json(review);
  }); 
}

function reviewDelete(req, res) {
  Review.findByIdAndRemove(req.params.id, function(err) {
    if(err) return res.status(500).json(err);
    return res.status(204).send();
  });
}

module.exports = {
  index: reviewIndex,
  create: reviewCreate,
  show: reviewShow,
  update: reviewUpdate,
  delete: reviewDelete
}




























