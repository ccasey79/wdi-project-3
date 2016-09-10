angular 
  .module('wdi-project-3', ["ui.router", "ngResource"])
  .config(Router);

Router.$inject = ['$stateProvider', '$urlRouterProvider'];
function Router($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('register', {
      url: '/register',
      templateUrl: '/templates/register.html'
    })
    .state('login', {
      url: '/login',
      templateUrl: 'templates/login.html' 
    })
    .state("petsIndex", {
      url: "/pets",
      templateUrl: "/templates/pets/index.html"
    })
    .state("petsNew", {
      url: "/pets/new",
      templateUrl: "templates/pets/new.html"
    })
    .state("petsShow", {
      url: "/pets/:id",
      templateUrl: "/templates/pets/show.html"
    })
    .state("petsEdit", {
      url: "/pets/:id/edit",
      templateUrl: "/templates/pets/edit.html"
    })

  $urlRouterProvider.otherwise("/login");  
}












