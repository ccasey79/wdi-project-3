angular 
  .module('wdi-project-3')
  .controller("PetsEditController", PetsEditController);

PetsEditController.$inject = ["Pet", "$state"];
function PetsEditController(Pet, $state) {
  this.selected = Pet.get($state.params);
  // this.reviews = Review.query();

  // this.save = function() {
  //   this.selected.$update(function() {
  //     $state.go('petsShow');
  //   });
  // }
}  