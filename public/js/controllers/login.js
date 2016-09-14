angular
  .module("wdi-project-3")
  .controller("LoginController", LoginController);

LoginController.$inject = ["User", "$state", "$rootScope"];
function LoginController(User, $state, $rootScope) {

  this.credentials = {};

// function to send info to the api

  this.submit = function submit() {
    User.login(this.credentials, function(res) {
      $rootScope.$broadcast("loggedIn");
      $state.go("reviewsIndex");
    });
  }
}

