WantInstant.controller('AppCtrl', function($scope,$state,ServerHttp,URLS,NAMES) {

	$scope.init = function(){
		console.log("AppCtrl");
		$scope.user =  {'email':'osjobu1@gmail.com', 'password':'12345', 'localstorage':false};
		$scope.serverRequest();
	};
	
	$scope.goToDetail = function(){
		$state.go("detail");
	};
	
	$scope.serverRequest = function(params){
		
		ServerHttp.jsonp(URLS.URL_LOGIN , $scope.user )
		.then(function(data) {
			//Success
			console.log(data);
		}
		,function(error){
			//Error here
		});
	};
		
	$scope.init();
});
