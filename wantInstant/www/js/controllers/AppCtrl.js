WantInstant.controller('AppCtrl', function($scope,$state,$cordovaPush,$cordovaDialogs, $cordovaMedia, $cordovaToast,ServerHttp,URLS,NAMES) {

	$scope.init = function(){
		console.log("AppCtrl");
		$scope.user =  {'email':'osjobu1@gmail.com', 'password':'12345', 'localstorage':false};
		//$scope.serverRequest();
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
	
	 // Notification Received
    $scope.$on('$cordovaPush:notificationReceived', function (event, notification) {
        console.log(JSON.stringify([notification]));
        if (ionic.Platform.isAndroid()) {
            handleAndroid(notification);
        }
        /*else if (ionic.Platform.isIOS()) {
            handleIOS(notification);
            $scope.$apply(function () {
                $scope.notifications.push(JSON.stringify(notification.alert));
            })
        }*/
    });
    
 // Android Notification Received Handler
    function handleAndroid(notification) {
        // ** NOTE: ** You could add code for when app is in foreground or not, or coming from coldstart here too
        //             via the console fields as shown.
        console.log("In foreground " + notification.foreground  + " Coldstart " + notification.coldstart);
        if (notification.event == "registered") {
            $scope.regId = notification.regid;
            //storeDeviceToken("android");
        }
        else if (notification.event == "message") {
            $cordovaDialogs.alert(notification.message, "Push Notification Received");
            $scope.$apply(function () {
                $scope.notifications.push(JSON.stringify(notification.message));
            })
        }
        else if (notification.event == "error")
            $cordovaDialogs.alert(notification.msg, "Push notification error event");
        else $cordovaDialogs.alert(notification.event, "Push notification handler - Unprocessed Event");
    }
    
    
		
	$scope.init();
});
