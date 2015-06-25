'use strict';

var PrototipoProgium = {};
var _ScopeContainer = {};
var App = angular.module('PrototipoProgium', ['PrototipoProgium.services', 'ngRoute']);

App.controller('MainController', function($scope, $route, $routeParams, $location) {
     $scope.$route = $route;
     $scope.$location = $location;
     $scope.$routeParams = $routeParams;
     $scope.esAdministrador = true;
     $scope.esconderMenu = false;
     $scope.esconderHeader = false;
     
     //Almacenar MainController Scoper para cambiar las variables desde otros scopes
     _ScopeContainer['MainController'] = $scope;
})

App.config(function($routeProvider, $locationProvider) {
  	$routeProvider
		.when('/iniciar-sesion', {
			templateUrl: 'modulos/seguridad/inicio-sesion.html',
			controller: 'IniciarSesionController'
		})
		.when('/usuario-registrar', {
			templateUrl: 'modulos/seguridad/usuario-registrar.html',
			controller: 'UsuarioRegistrarController'
		})
		.when('/usuario-registrar-siguiente', {
			templateUrl: 'modulos/seguridad/usuario-registrar-2.html',
			controller: 'UsuarioRegistrarController'
		})
		.when('/catering-registrar', {
			templateUrl: 'modulos/catering/catering-registrar.html',
			controller: 'CateringRegistrarController'
		})
		.when('/catering-buscar', {
			templateUrl: 'modulos/catering/catering-buscar.html',
			controller: 'CateringBuscarController'
		})
		.when('/producto-registrar', {
			templateUrl: 'modulos/producto/producto-registrar.html',
			controller: 'ProductoRegistrarController'
		})
		.when('/cotizacion-registrar', {
			templateUrl: 'modulos/cotizacion/cotizacion-registrar.html',
			controller: 'CotizacionRegistrarController'
		})
		.otherwise({
        	redirectTo: '/iniciar-sesion'
		});
});