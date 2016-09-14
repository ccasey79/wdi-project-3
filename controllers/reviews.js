var Review = require('../models/review');

function reviewIndex(req, res) {
  Review.find(function(err, reviews) {
    if(err) return res.status(500).json(err);
    return res.status(200).json(reviews);
  });
}

function reviewCreate(req, res) {

  req.body.user = req.user._id;

  Review.create(req.body, function(err, review) {
    if(err) return res.status(400).json(err);
    return res.status(201).json(review);
  });
}

function reviewShow(req, res) {
  Review.findById(req.params.id, function(err, review) {
    if(err) return res.status(500).json(err);
    if(!review) return res.status(404).json({ message: "Could not find a review with that id" });
    return res.status(200).json(review);
  });
}

function reviewUpdate(req, res) {
  Review.findById(req.params.id, function(err, review) {

    if(err) return res.status(500).json(err);
    if(!review) return res.status(404).json({ message: "Could not find a review with that id" });

    if(review.user != req.user._id) {
      return res.status(401).json({ message: "You do not have permission to edit this review" });
    }

    for(field in req.body) {
      review[field] = req.body[field];
    }

    review.save(function(err, review) {
      if(err) return res.status(400).json(err);
      return res.status(200).json(review);
    });
  }); 
}

function reviewDelete(req, res) {
  Review.findById(req.params.id, function(err, review) {

    if(err) return res.status(500).json(err);
    if(!review) return res.status(404).json({ message: "Could not find a review with that id" });

    if(review.user != req.user._id) {
      return res.status(401).json({ message: "You do not have permission to edit this review" });
    }

    for(field in req.body) {
      review[field] = req.body[field];
    }

    review.remove(function(err) {
      if(err) return res.status(400).json(err);
      return res.status(204).send();
    });
  });
}

module.exports = {
  index: reviewIndex,
  create: reviewCreate,
  show: reviewShow,
  update: reviewUpdate,
  delete: reviewDelete
}




























