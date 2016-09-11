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

// pets

    .state("petsIndex", {
      url: "/pets",
      templateUrl: "/templates/pets/index.html",
      controller: "PetsIndexController as petsIndex"
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

// reviews

    .state("reviewsIndex", {
      url: "/reviews",
      templateUrl: "/templates/reviews/index.html",
      controller: "ReviewsIndexController as reviewsIndex"
    })
    .state("reviewsNew", {
      url: "/reviews/new",
      templateUrl: "templates/reviews/new.html"
    })
    .state("reviewsShow", {
      url: "/reviews/:id",
      templateUrl: "/templates/reviews/show.html"
    })
    .state("reviewsEdit", {
      url: "/reviews/:id/edit",
      templateUrl: "/templates/reviews/edit.html"
    });

  $urlRouterProvider.otherwise("/login");  
}












