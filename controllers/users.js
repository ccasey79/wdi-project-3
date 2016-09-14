var User = require('../models/user');

function userIndex(req, res) {
  User.find(function(err, users) {
    if(err) return res.status(500).json(err);
    return res.status(200).json(users);
  });
}

function userShow(req, res) {
  User.findById(req.params.id, function(err, user) {
    if(err) return res.status(500).json(err);
    if(!user) return res.status(404).json({ message: "Could not find a user with that id" });
    return res.status(200).json(user);
  });
}

function userUpdate(req, res) {
  User.findById(req.params.id, req.body, { new: true }, function(err, returnedUser) {

      if(err) return res.status(500).json(err);
      if(!returnedUser) return res.status(404).json({ message: "Could not find a user with that id" });

        if(returnedUser._id != req.user._id) {
          return res.status(401).json({ message: "You do not have permission to edit this user" });
        }

        for(field in req.body) {
          returnedUser[field] = req.body[field];
        }

        returnedUser.save(function(err, user) {
          if(err) return res.status(400).json(err);
          return res.status(200).json(user);
        });
      }); 
}

module.exports = {
  index: userIndex,
  show: userShow,
  update: userUpdate

}