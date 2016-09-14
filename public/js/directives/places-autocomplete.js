angular 
  .module('wdi-project-3')
  .directive("placesAutocomplete", placesAutocomplete);

placesAutocomplete.$inject = ["$rootScope"];
function placesAutocomplete($rootScope) {
  return {
    restrict: 'A',
    link: function(scope, element) {
      var autocomplete = new google.maps.places.Autocomplete(element[0]);

      autocomplete.addListener('place_changed', function(place) {
        $rootScope.$broadcast("placeChanged", autocomplete.getPlace());
      });
    }
  }
}