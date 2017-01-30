/*
  
  Create the angular main app, add the controller modules(Movies and Actors) and config different routes to navigate

 */

var app = angular.module('appMovieActor', [
  'ngRoute',
  'actorsControllers',
  'moviesControllers'
]);

app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.	//home page
      when('/', {
        templateUrl: 'partials/ListPopularMovies.html',
        controller: 'ListPopularMoviesCtrl'
      }).	 //when search all movies 	  
      when('/ListMovies/:search', {
        templateUrl: 'partials/ListMovies.html',
        controller: 'ListMoviesCtrl'
      }).   //when find by movie id
      when('/DetailMovie/:id', {
        templateUrl: 'partials/DetailMovie.html',
        controller: 'DetailMovieCtrl'
      }). //when search all actor
      when('/ListActors/:search', {
        templateUrl: 'partials/ListActors.html',
        controller: 'ListActorsCtrl'
      }).//when find by actor id
      when('/DetailActor/:id', {
        templateUrl: 'partials/DetailActor.html',
        controller: 'DetailActorCtrl'
      }).
      otherwise({
        redirectTo: '/'
      });
  }]);