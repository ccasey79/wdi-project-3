angular 
  .module('wdi-project-3')
  .controller("ReviewsEditController", ReviewsEditController);

ReviewsEditController.$inject = ["Review", "$state"];
function ReviewsEditController(Review, $state) {
  this.selected = Review.get($state.params);  

  this.save = function() {
    this.selected.$update(function() {
      $state.go('reviewsShow', $state.params);
    });
  }
} 










