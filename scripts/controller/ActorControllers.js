/*
	create the controller module by actor actions
*/

var actorsControllers = angular.module('actorsControllers', []);

//controller that find by actor 
actorsControllers.controller('ListActorsCtrl', ['$scope', '$routeParams', '$http', function($scope, $routeParams, $http) {
    var queryParam = '';
    search();

    function search() {
		//call to the PHP api
        $http.get(decodeURI('api/?actionParam=listActor&queryParam='+$routeParams.search+'&pageParam=1')).then(function(r) {
			//get info results
			$scope.listActor = r.data.results;
            $scope.totalPage = r.data.total_pages;
			$scope.totalResultActor = r.data.total_results;
            queryParam = $routeParams.search;
        });
    }

	//when use the pagination
    $scope.findListActor = function(numPage) {
		//call to the PHP api
        $http.get('api/?actionParam=listActor&queryParam='+queryParam+'&pageParam='+ numPage).then(function(r) {
			//get info results
			$scope.listActor = r.data.results;
        });
    }


}]);


//controller that find by actor id
actorsControllers.controller('DetailActorCtrl', ['$scope', '$routeParams', '$http', function($scope, $routeParams, $http) {
    detail();
    credits();
  

    function detail() {
		//call to the PHP api
        $http.get('api/?actionParam=detailActor&idParam='+$routeParams.id).then(function(r) {
			//get info results
            $scope.actor = r.data;
        });
    }

    function credits() {
		//call to the PHP api
        $http.get('api/?actionParam=movieCredits&idParam='+$routeParams.id).then(function(r) {
			//get info results
            $scope.listActorCredits = r.data.cast;
			$scope.listActorCreditsCrew = r.data.crew;
        });
    }

    

}]);