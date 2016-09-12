var router = require('express').Router();
var jwt = require('jsonwebtoken');
var secret = require('../config/tokens').secret;
var petsController = require('../controllers/pets');
var reviewsController = require('../controllers/reviews');
var authenticationsController = require('../controllers/authentications');

// middleware to check for a secure route with a valid jwt route, check token

function secureRoute(req, res, next) {
  if(!req.headers.authorization) return res.status(401).json({ message: "Unauthorized "});

  var token = req.headers.authorization.replace('Bearer ', '');

  jwt.verify(token, secret, function(err, payload) {
    if(err || !payload) return res.status(401).json({ message: "Unauthorized "});

    req.user = payload;
    next();
  });
}

router.route('/pets')
  .get(petsController.index)
  .post(secureRoute, petsController.create);

router.route('/pets/:id')
  .get(petsController.show)
  .put(secureRoute, petsController.update)
  .delete(secureRoute, petsController.delete);

router.route('/reviews')
  .get(reviewsController.index)
  .post(secureRoute, reviewsController.create);

router.route('/reviews/:id')
  .get(reviewsController.show)
  .put(secureRoute, reviewsController.update)
  .delete(secureRoute, reviewsController.delete);

router.post('/register', authenticationsController.register);
router.post('/login', authenticationsController.login);

module.exports = router;  





















































