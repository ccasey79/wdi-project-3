angular 
  .module('wdi-project-3')
  .controller("ReviewsIndexController", ReviewsIndexController);

ReviewsIndexController.$inject = ["Review", "$state", "$interval"];
function ReviewsIndexController(Review, $state, $interval) {
  this.all = Review.query();
  console.log("Here are the reviews", this.all);


  this.center = {lat:53.87844, lng: -1.955566} 


}