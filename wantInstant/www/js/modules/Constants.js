var Constants = angular.module("Constants",[]);

//http://ilikekillnerds.com/2014/11/constants-values-global-variables-in-angularjs-the-right-way/
//CONSTANTS
Constants.constant('URLS', {
	URL_LOGIN: 'http://getsir.mx/payme/PaymeWebService.php?methodName=getUser&callback=JSON_CALLBACK&',
    appVersion: 2.0
});

Constants.constant('NAMES', {
    apiUrl: 'http://www.google.com?api'
});


//VALUES
/*Constants.value('user',{
	name : '',
	email : ''
});*/