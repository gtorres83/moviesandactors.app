/*
	create the controller module by movie actions
*/

var moviesControllers = angular.module('moviesControllers', []);

//controller that find by movie 
moviesControllers.controller('ListMoviesCtrl', ['$scope', '$routeParams', '$http', function($scope, $routeParams, $http) {
    var queryParam = '';
    search();

    function search() {
		//call to the PHP api
        $http.get(decodeURI('api/?actionParam=listMovies&queryParam='+$routeParams.search+'&pageParam=1')).then(function(r) {
            //get info results
			$scope.listMovie = r.data.results;
            $scope.totalPage = r.data.total_pages;
			$scope.totalResultMovie = r.data.total_results;
            queryParam = $routeParams.search;
        });
    }

    $scope.findListMovie = function(numPage) {
		//call to the PHP api
        $http.get(decodeURI('api/?actionParam=listMovies&queryParam='+queryParam+'&pageParam=' + numPage)).then(function(r) {
			//get info results
			$scope.listMovie = r.data.results;
        });
    }


}]);

//controller that find by movie id
moviesControllers.controller('DetailMovieCtrl', ['$scope', '$routeParams', '$http', function($scope, $routeParams, $http) {

    detail();
    credits();


    function detail() {
		//call to the PHP api
        $http.get('api/?actionParam=detailMovies&idParam='+$routeParams.id).then(function(r) {
		  //get info results		
		  $scope.movie = r.data;
        });
    }

    function credits() {
		//call to the PHP api
        $http.get('api/?actionParam=credits&idParam='+$routeParams.id).then(function(r) {    
			//get info results
  		    $scope.listMovieCreditsCast = r.data.cast;
            $scope.listMovieCreditsCrew = r.data.crew;
        });
    }
}]);

//controller that find the popular movies and in Theatres
moviesControllers.controller('ListPopularMoviesCtrl', ['$scope', '$routeParams', '$http', function($scope, $routeParams, $http) {
    var queryParam = '';
    searchPopularMovies();
    searchMoviesInTheatres();

    function searchPopularMovies() {
		//call to the PHP api
        $http.get('api/?actionParam=popularMovies').then(function(r) { 
			//get info results
			$scope.listPopularMovie = r.data.results;
            $scope.totalPage = r.data.total_pages;
            queryParam = $routeParams.search;
        });
    }

    function searchMoviesInTheatres() {
		//call to the PHP api
        $http.get('api/?actionParam=inTheatresMovies').then(function(r) { 
			//get info results
			$scope.listMoviesInTheatres = r.data.results;
            $scope.totalPage = r.data.total_pages;
            queryParam = $routeParams.search;
        });
    }

    
}]);