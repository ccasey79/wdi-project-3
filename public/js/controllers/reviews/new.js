angular 
  .module('wdi-project-3')
  .controller("ReviewsNewController", ReviewsNewController);

ReviewsNewController.$inject = ["Review", "$state", "$rootScope"];
function ReviewsNewController(Review, $state, $rootScope) {
  var self = this;
  this.new = {};

  $rootScope.$on("placeChanged", function(e, place) {

    $rootScope.$applyAsync(function() {
      var location = place.geometry.location.toJSON();

      self.new.lat = location.lat;
      self.new.lng = location.lng;
      self.new.name = place.name;
      self.new.address = place.formatted_address;
    });
  });

  this.create = function() {
    Review.save(this.new, function() {
      $state.go('reviewsIndex');
    });
  }
}  





