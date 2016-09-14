angular
  .module('wdi-project-3')
  .controller("UsersEditController", UsersEditController);

UsersEditController.$inject = ["User", "$state"];
function UsersEditController(User, $state) {
  this.selected = User.get($state.params);

  this.save = function() {
    this.selected.$update(function(res) {
      // $state.go('usersShow', $state.params);
      console.log(res);
    });
  }
}





 