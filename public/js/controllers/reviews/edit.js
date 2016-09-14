angular 
  .module('wdi-project-3')
  .controller("ReviewsEditController", ReviewsEditController);

ReviewsEditController.$inject = ["Review", "$state", "$rootScope"];
function ReviewsEditController(Review, $state, $rootScope) {
  this.selected = Review.get($state.params);

  $rootScope.$on("placeChanged", function(e, place) {

    $rootScope.$applyAsync(function() {
      var location = place.geometry.location.toJSON();

      self.new.lat = location.lat;
      self.new.lng = location.lng;
      self.new.name = place.name;
      self.new.address = place.formatted_address;
    });
  });

  this.save = function() {
    this.selected.$update(function() {
      $state.go('reviewsShow', $state.params);
    });
  }
}