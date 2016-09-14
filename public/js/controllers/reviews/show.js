angular
  .module('wdi-project-3')
  .controller("ReviewsShowController", ReviewsShowController);

ReviewsShowController.$inject = ["Review", "$state", "TokenService"];
function ReviewsShowController(Review, $state, TokenService) {

  var self = this;
  
  Review.get({ id: $state.params.id }, function(review) {
    self.selected = review;
    self.canEdit = self.currentUser._id == self.selected.user;
  });

  this.currentUser = TokenService.decodeToken();

  console.log(this.currentUser);

  this.delete = function() {
    this.selected.$remove(function() {
      $state.go("reviewsIndex");
    });
    this.selected = {};
  }
}  










