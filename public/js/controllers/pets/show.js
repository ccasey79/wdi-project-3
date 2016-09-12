angular 
  .module('wdi-project-3')
  .controller("PetsShowController", PetsShowController);

PetsShowController.$inject = ["Pet", "$state"];
function PetsShowController(Pet, $state) {

  this.selected = Pet.get({ id: $state.params.id });

  console.log(this.selected);
} 