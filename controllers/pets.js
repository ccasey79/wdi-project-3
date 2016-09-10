var Pet = require('../models/pet');

function petIndex(req, res) {
  Pet.find(function(err, pet) {
    if(err) return res.status(500).json(err);
    return res.status(200).json(pet);
  });
}

function petCreate(req, res) {
  Pet.create(req.body, function(err, pet) {
    if(err) return res.status(400).json(err);
    return res.status(201).json(pet);
  });
}

function petShow(req, res) {
  Pet.findById(req.param.id, function(err, pet) {
    if(err) return res.status(500).json(err);
    if(!pet) return res.status(404).json({ message: "Could not find a pet with that id"});
    return res.status(200).json(pet);
  });
}

function petUpdate(req, res) {
  Pet.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true}, function(err, pet) {
    if(err) return res.status(400).json(err);
    return res.status(200).json(pet);
  });
}

function petDelete(req, res) {
  Pet.findByIdAndRemove(req.params.id, function(err) {
    if(err) return res.status(500).json(err);
    return res.status(204).send();
  });
}



module.exports = {
  index: petIndex,
  create: petCreate,
  show: petShow,
  update: petUpdate,
  delete: petDelete
}




























