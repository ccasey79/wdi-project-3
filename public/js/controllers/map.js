angular 
  .module('wdi-project-3')
  .controller('MapController', MapController);

MapController.$inject = ["Review", "$rootScope", "$state"];
function MapController(Review, $rootScope, $state) {
  
  var self = this;

  this.markers = [];

  Review.query(function(data) {
    self.markers = data;
    console.log(data);
  });

  this.center = {lat:53.87844, lng: -1.955566};

  $rootScope.$on('markerClicked', function(event, location) {
    $state.go("reviewsShow", { id: location._id });
  });

}