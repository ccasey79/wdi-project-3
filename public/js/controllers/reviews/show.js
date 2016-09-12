angular
  .module('wdi-project-3')
  .controller("ReviewsShowController", ReviewsShowController);

ReviewsShowController.$inject = ["Review", "$state"];
function ReviewsShowController(Review, $state) {
  
  this.selected = Review.get({ id: $state.params.id });

  this.delete = function() {
    this.selected.$remove(function() {
      $state.go("reviewsIndex");
    });
    this.selected = {};
  }
}  










