angular 
  .module('wdi-project-3')
  .controller("PetsEditController", PetsEditController);

PetsEditController.$inject = ["Pet", "$state", "Review"];
function PetsEditController(Pet, $state, Review) {
  this.selected = Pet.get($state.params);
  this.reviews = Review.query();

  this.save = function() {
    this.selected.$update(function() {
      $state.go('petsShow', $state.params);
    });
  }
}  