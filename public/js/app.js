angular 
  .module('wdi-project-3', ["ui.router", "ngResource", "angular-jwt"])
  .constant("API_URL", "http://localhost:3000/api")
  .config(setupInterceptor)
  .config(Router);

setupInterceptor.$inject = ["$httpProvider"];
function setupInterceptor($httpProvider) {
  return $httpProvider.interceptors.push("AuthInterceptor");
}

Router.$inject = ['$stateProvider', '$urlRouterProvider'];
function Router($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('register', {
      url: '/register',
      templateUrl: '/templates/register.html',
      controller: "RegisterController as register"
    })
    .state('login', {
      url: '/login',
      templateUrl: 'templates/login.html', 
      controller: "LoginController as login"
    })
    .state("petsIndex", {
      url: "/pets",
      templateUrl: "/templates/pets/index.html",
      controller: "PetsIndexController as petsIndex"
    });

  $urlRouterProvider.otherwise("/login");  
}












