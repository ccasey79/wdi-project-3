angular 
  .module('wdi-project-3')
  .controller("ReviewsIndexController", ReviewsIndexController);

ReviewsIndexController.$inject = ["Review", "$state"];
function ReviewsIndexController(Review, $state) {
  this.all = Review.query();
  console.log (this.all);
}