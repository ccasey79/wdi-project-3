angular 
  .module('wdi-project-3')
  .controller("PetsNewController", PetsNewController);

PetsNewController.$inject = ["Pet", "$state", "Review"];
function PetsNewController(Pet, $state, Review) {
  this.new = {};
  this.reviews = Review.query();

  this.create = function() {
    Pet.save(this.new, function() {
      $state.go('petsIndex');
    });
  }
}  