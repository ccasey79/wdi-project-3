angular 
  .module('wdi-project-3')
  .controller("UsersIndexController", UsersIndexController);

UsersIndexController.$inject = ["User", "$state"];
function UsersIndexController(User, $state) {
  this.all = User.query();
}











 