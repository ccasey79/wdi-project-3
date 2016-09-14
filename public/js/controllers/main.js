angular 
  .module("wdi-project-3")
  .controller("MainController", MainController);

MainController.$inject = ["TokenService", "$state", "$rootScope"];  
function MainController(TokenService, $state, $rootScope) {
  
  var self = this;
  this.currentUser = TokenService.decodeToken();

  this.logout = function logout() {
    TokenService.clearToken();
    this.currentUser = null;
    $state.go("reviewsIndex");
  }

  $rootScope.$on("loggedIn", function() {
    self.currentUser = TokenService.decodeToken();
  });

  $rootScope.$on("unauthorised", function() {
    $state.go("login");
    self.errorMessage = "You're not getting in here!";
  });

  $rootScope.$on("$stateChangeStart", function() {
    self.errorMessage = null;
  });

}


















