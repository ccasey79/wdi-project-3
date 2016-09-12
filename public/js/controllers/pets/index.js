angular
  .module('wdi-project-3')
  .controller("PetsIndexController", PetsIndexController);

PetsIndexController.$inject = ["Pet", "$state"];  
function PetsIndexController(Pet, $state) {
  this.all = Pet.query();
  console.log (this.all)
}