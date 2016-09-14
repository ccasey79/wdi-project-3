angular 
  .module('wdi-project-3')
  .directive("gMap", gMap);

gMap.$inject = ["$rootScope"];
function gMap($rootScope) {
  return {
    restrict: 'E',
    replace: true,
    template: '<div class="g-map"></div>',
    scope: {
      center: '=',
      markers: '='
    },
    link: function(scope, element) {

      var markers = [];

      if(!scope.center) {
        throw new Error("You must include a `center` attribute in your g-map directive");
      }

      var map = new google.maps.Map(element[0], {
        center: scope.center,
        zoom: 6
      });

      scope.$watch('markers.length', updateMarkers);
      scope.$watch('center.lat', updateMap);
      scope.$watch('center.lng', updateMap);

      function updateMap() {
        map.panTo(scope.center);
      }

      if(scope.markers) {
        updateMarkers();
      }

      function updateMarkers() {
        markers.forEach(function(marker) {
          marker.setup(null);
        });
        
        markers = scope.markers.map(function(location) {

          var marker = new google.maps.Marker({
            position: { lat: location.lat, lng: location.lng },
            map: map
          });

          marker.addListener('click', function() {
            $rootScope.$broadcast("markerClicked", location);
          });

          return marker;
          
        });
      }
    }
  }   

}

 


