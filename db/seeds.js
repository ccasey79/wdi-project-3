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
    passwordConfirmation: "password",
    pet_name: "Pepper",
    image: "http://vignette2.wikia.nocookie.net/ghostbusters/images/1/11/Bill_Murray.jpeg/revision/latest?cb=20081013140955"
  }, {
    username: "billmurray",
    email: "bill@bill.com",
    password: "password",
    passwordConfirmation: "password",
    pet_name: "Molly",
    image: "http://www.u927.com/wp-content/uploads/2016/02/bill-murray.jpg"
  }, {
    username: "janethowell", 
    email: "janet@janet.com",
    password: "password",
    passwordConfirmation: "password",
    pet_name: "Mavis",
    image: "http://cdn.twentytwowords.com/wp-content/uploads/Dogwool-01.jpg?1d0612"
  }, {
    username: "stevesmith",
    email: "steve@steve.com",
    password: "password",
    passwordConfirmation: "password",
    pet_name: "Rover",
    image: "http://img.cdn2.vietnamnet.vn/Images/english/2014/02/11/10/20140211105808-dog-2.jpg"
  }, {  
    username: "sallytaylor", 
    email: "sally@sally.com",
    password: "password",
    passwordConfirmation: "password",
    pet_name: "Nora",
    image: "https://img.buzzfeed.com/buzzfeed-static/static/enhanced/webdr01/2013/1/16/10/enhanced-buzz-2724-1358351249-14.jpg"
  }, {
    username: "davefisher", 
    email: "dave@dave.com",
    password: "password",
    passwordConfirmation: "password",
    pet_name: "Barney",
    image: "http://67.media.tumblr.com/ea884efd16cdf361b79c51c80447cd8f/tumblr_nh7oj8VlLr1tvk4g1o1_500.jpg"
  }, {
    username: "mattbarker",
    email: "matt@matt.com",
    password: "password",
    passwordConfirmation: "password",
    pet_name: "Murtle",
    image: "http://i.telegraph.co.uk/multimedia/archive/03243/2_514982843_3243681k.jpg"
  }, {  
    username: "sheilastrong", 
    email: "shelia@shelia.com", 
    password: "password",
    passwordConfirmation: "password",
    pet_name: "Sid",
    image: "http://giveitlove.com/wp-content/uploads/Human-Dog-Face-Hybrid.png"
  }, {
    username: "heidiburton",
    email: "heidi@heidi.com",
    password: "password",
    passwordConfirmation: "password",
    pet_name: "Binks",
    image: "http://cdn-image.realsimple.com/sites/default/files/styles/rs_photo_gallery_vert/public/image/images/stock/girl-walking-dog_gal.jpg?itok=wwNuF5WD"
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
    image: "http://pollywigglecottage.co.uk/wp-content/gallery/childrens-fun/Huge%20North%20Norfolk%20beaches.jpg"
  }, {
    name: "Kingsgate Bay",
    address: "Broadstairs",
    content: "Kingsgate Bay is a sheltered sandy cove backed by high white chalk cliffs. The beach is probably best known for its sea caves which are reputedly some of the best in the country.",
    lat: 51.3833638,
    lng: 1.4399069,
    rating: 6,
    user: users[1],
    image: "http://s0.geograph.org.uk/geophotos/01/89/25/1892502_b5b2c228.jpg"
  }, {
    name: "Newman Street Tavern",
    address: "Regents Park, London",
    content: "Head south down Cleveland Street and you'll find Newman Street Tavern, a very rural-feeling pub with a seasonal British menu.", 
    lat: 51.532692,
    lng: -0.141995,
    rating: 5,
    user: users[0], 
    image: "http://www.oubruncher.com/photos1/2284_2.jpg"
  }, {
    name: "Holkham Beach", 
    address: "Wells Next To The Sea",
    content: "Possibly one of the nicest unspoiled beaches in Norfolk",
    lat: 52.9667632,
    lng: 0.8143636,
    rating: 8,
    user: users [0],
    image: "http://www.holkham.co.uk/images/carousel/holkham-beach-north-norfolk.jpg"
  }, {
    name: "The Marble Arch",
    address: "73 Rochdale Road, Manchester",
    content: "A legendary pub in Manchester, The Marble Arch is an architectural gem, a real ale drinker’s dream and boasts a brilliant kitchen serving the best fish and chips in the city and probably the best cheese selection in the north west!",
    lat: 53.488193, 
    lng: -2.2345599,
    rating: 6,
    user: users [1],
    image: "https://static.designmynight.com/uploads/2013/01/Marble-Arch-Manchester-pub-optimised.jpg"  
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
    image: "http://blueseasurf.co.uk/photos/hope2.jpg"
  }, {
    name: "Brandling Villa",
    address: "Haddricks Mill Rd",
    content: "We couldn't fault the welcome and found the staff very pleasant. In addition to this they made our dog feel very welcome also.",
    lat: 55.0041801,
    lng: -1.6054226,
    rating: 5,
    user: users [1],
    image: "http://www.brandlingvilla.co.uk/wp-content/uploads/2013/05/slider-exterior.jpg"    
  }, { 
    name: "The Dirty Onion",
    address: "Hill Street, Belfast, Northern Ireland",
    content: "Only stopped for a wee dirk with a mate. It was a sunny late Tuesday afternoon. Love this indoor outdoor pub with its outdoor space. Haven't ate here only drink. Love the indoor space and the outside patio is very large and has a walk in nice restroom.",
    lat: 54.6019342,
    lng: -5.9292566,
    rating: 7,
    user: users[0],
    image: "https://media-cdn.tripadvisor.com/media/photo-s/07/a1/a2/dc/the-dirty-onion.jpg"
  }, {
    name: "Leslies Bar",
    address: "Ratcliffe Terrace, Edinburgh, Scotland",
    content: "I came here on the afternoon of New Year's Eve before dinner just to start on our festivities, and I couldn't of asked for more polite and friendly barstaff. There was a lady and a man and they were both excellent and very welcoming. The bar itself is very old school and amazing!",
    lat: 55.9340576,
    lng: -3.1806152,
    rating: 7,
    user: users[0],
    image: "http://www.realalepubedinburgh.co.uk/images/bar_logo800x476.jpg"
  }, {
    name: "The Devon",
    address: "Kingswear Crescent, Leeds",
    content: "Lovely pub, been a few time with friends. Nice food with generous portions too & also good variety of drinks. Lovely out door area. Bar staff seem really friendly & helpful aswell. Would definitely recommend this place to family & friends & would definitely return.",
    lat: 53.8011287,
    lng: -1.4453236,
    rating: 7,
    user: users[0],
    image: "https://media-cdn.tripadvisor.com/media/photo-s/0a/87/50/a5/devon-pub.jpg"
  }, {
    name: "The Hatchet Inn",
    address: "27 Frogmore Street, Bristol",
    content: "Said to be oldest pub in Bristol. Some old features but not appearing that old. Usual selection of beers, wines and spirits. Food is available but not served that late, about 9pm for last orders I think. Ordered steak, toasted sandwich, chicken wrap and grilled chicken. All reasonably priced. Bands practise upstairs some nights but not too loud.",
    lat: 51.4539792,
    lng: -2.6025988,
    rating: 9,
    user: users[0],
    image: "https://media.timeout.com/images/101894563/630/472/image.jpg"  
  }, {
    name: "The George and Dragon",
    address: "162 Bath Road, Reading",
    content: "We had Lasagne with a side order of chips and their Beef and Ale Pie. Both were very good and tasted really good, and at the prices you really can't go wrong. The staff made us very welcome and although it is a sports orientated location, when it gets a little lively, I'd recommend it.",
    lat: 51.4444014,
    lng: -1.0221571,
    rating: 6,
    user: users[0],
    image: "http://img.static-bookatable.com/the-st-george-dragon-reading-7.jpg?id=f2acba7455a7d830f2f8baf7f720a685.jpg&404=bat2/404-restaurant.jpg&width=768&height=512&mode=crop&scale=both"    
  }, {  
    name: "Old Black Lion",
    address: "1 Black Lion Hill, Northampton",
    content: "very friendly pub and comfortable seating - good selection of real ale which is well looked after. staff very friendly and efficient, even when busy. Landlord very capable at keeping a good pub.",
    lat: 52.2365849,
    lng: -0.9064867,
    rating: 5,
    user: users[0],
    image: "http://follownorthampton.co.uk/wp-content/uploads/2014/07/blacklion1-peter-app.jpg"
  }  
], function(err, review) {    
  console.log(users.length + " users created!");
  console.log(pet.length + " pet created!");
  console.log(review.length + " review created!");

  mongoose.connection.close();
    });
  });
});


  
    
















