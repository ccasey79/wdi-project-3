angular
  .module('wdi-project-3')
  .controller("PetsIndexController", PetsIndexController);

PetsIndexController.$inject = ["Pet"];  
function PetsIndexController(Pet) {
  this.all = Pet.query();
}