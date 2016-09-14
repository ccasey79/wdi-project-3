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
  }, {
    username: "bobmurray",
    email: "bill@bill.com",
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
    lat: 52.6474228,
    lng: 1.7294368,
    rating: 4,
    user: users[0],
    image: "http://www.thebeachguide.co.uk/public/geophotos/1863011.jpg"
  }, {
    name: "Kingsgate Bay",
    address: "Broadstairs",
    content: "Kingsgate Bay is a sheltered sandy cove backed by high white chalk cliffs. The beach is probably best known for its sea caves which are reputedly some of the best in the country.",
    lat: 51.3833638,
    lng: 1.4399069,
    rating: 6,
    user: users[1],
    image: "http://www.walkingbritain.co.uk/m/15/156109.jpg"
  }, {
    name: "Newman Street Tavern",
    address: "Regents Park, London",
    content: "Head south down Cleveland Street and you'll find Newman Street Tavern, a very rural-feeling pub with a seasonal British menu.", 
    lat: 51.532692,
    lng: -0.141995,
    rating: 5,
    user: users[0], 
    image: "http://cdni.condenast.co.uk/639x426/k_n/Newman-Street-Tavern-house-15may15_pr_b_639x426.jpg"
  }, {
    name: "Holkham Beach", 
    address: "Wells Next To The Sea",
    content: "Possibly one of the nicest unspoiled beaches in Norfolk",
    lat: 52.9667632,
    lng: 0.8143636,
    rating: 8,
    user: users [0],
    image: "http://www.visitnorfolk.co.uk/img/470/holkham%20beach%20100_7997.jpg"
  }, {
    name: "The Marble Arch",
    address: "73 Rochdale Road, Manchester",
    content: "A legendary pub in Manchester, The Marble Arch is an architectural gem, a real ale drinker’s dream and boasts a brilliant kitchen serving the best fish and chips in the city and probably the best cheese selection in the north west!",
    lat: 53.488193, 
    lng: -2.2345599,
    rating: 6,
    user: users [1],
    image: "http://www.thegoodpubguide.co.uk/var/ldc-images/10081708.jpg"  
  }, {
    name: "The Wheatsheaf",
    address: "472 Walsall Road",
    content: "I have eaten here a number of times , however my last time was the final visit. Me and 3 friends ordered large mixed grills. They came out after waiting 45 minutes. They were served on sizzler plates and looked delicious.",
    lat: 52.6542023,
    lng: -2.0128102,
    rating: 4,
    user: users [0],
    image: "http://images.pub-explorer.com/pubs/621/35010.jpg"  
  }, {
    name: "Middle Hope Beach",
    address: "Weston-Super-Mare",
    content: "The beach here is backed by farm land and faces into the Bristol Channel with views across to Wales. Murky water and the muddy low tide sand will probably be enough to put most off the idea of swimming. If not the strong tidal currents should do.",
    lat: 51.3457142,
    lng: -2.9621818,
    rating: 8,
    user: users [0],
    image: "http://www.thebeachguide.co.uk/public/geophotos/1539550.jpg"
  }, {
    name: "Brandling Villa",
    address: "Haddricks Mill Rd",
    content: "We couldn't fault the welcome and found the staff very pleasant. In addition to this they made our dog feel very welcome also.",
    lat: 55.0041801,
    lng: -1.6054226,
    rating: 5,
    user: users [1],
    image: "http://cdn2.roastwinner.co.uk/wp-content/uploads/2011/09/Brandling-Villa.jpg"    
  }  
], function(err, review) {    
  console.log(users.length + " users created!");
  console.log(pet.length + " pet created!");
  console.log(review.length + " review created!");

  mongoose.connection.close();
    });
  });
});


  
    
















