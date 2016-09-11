angular 
  .module('wdi-project-3')
  .controller("PetsShowController", PetsShowController);

PetsShowController.$inject = ["Pet", $state];
function PetsShowController(Pet, $state) {
  this.selected = Pet.get($state.params);

  this.delete = function() {
    this.selected.$remove(function() {
      $state.go("petsIndex");
    });
  }
} 