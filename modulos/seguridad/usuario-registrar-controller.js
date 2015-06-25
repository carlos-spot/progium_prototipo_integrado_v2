'use strict';

/**
 * RegistrarCateringController
 * @constructor
 */

/**App.controller('RegistrarusuarioController', function($scope, $location) {

  $scope.init();

 	
}); */


myApp.config(function($stateProvider, $urlRouterProvider) {

	$urlRouterProvider.otherwise('/registrousuario');

	$stateProvider

        // route for the registro usuario page
        .state('registrousuario', {
         url: '/registrousuario',
            templateUrl : 'registrousuario.html',
            controller  : 'registrarusuarioController'
        })

        .state('siguiente', {
        	url: '/siguiente',
        	templateUrl:'registrousuario2.html',
        	controller: 'registrarusuarioController'
        });

});

myApp.controller('registrarusuarioController', function($scope) {
    //$scope.message = '';
});



myApp.controller('registrarusuarioController', function($scope, $location) {
   
    $scope.siguiente = function(){
        $location.url('/siguiente');  
    };


});


