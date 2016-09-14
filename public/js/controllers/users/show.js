angular 
  .module('wdi-project-3')
  .controller("UsersShowController", UsersShowController);

UsersShowController.$inject = ["User", "$state"];
function UsersShowController(User, $state) {

  this.selected = User.get({ id: $state.params.id });

  this.delete = function() {
    this.selected.$remove(function() {
      $state.go("usersIndex");
    });
    this.selected = {};
  }
}






