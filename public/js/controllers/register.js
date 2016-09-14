angular 
  .module("wdi-project-3")
  .controller("RegisterController", RegisterController);

RegisterController.$inject = ["User", "$state", "$rootScope"]
function RegisterController(User, $state, $rootScope) {

  this.user = {};

  this.submit = function submit() {
    User.register(this.user, function(res) {
        $rootScope.$broadcast("loggedIn");
        $state.go("home");
    });
  }
} 