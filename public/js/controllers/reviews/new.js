angular 
  .module('wdi-project-3')
  .controller("ReviewsNewController", ReviewsNewController);

ReviewsNewController.$inject = ["Review", "$state"];
function ReviewsNewController(Review, $state) {
  this.new = {};

  this.create = function() {
    Review.save(this.new, function() {
      $state.go('reviewsIndex');
    });
  }
}  