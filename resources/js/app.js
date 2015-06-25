'use strict';

var PrototipoProgium = {};

var App = angular.module('PrototipoProgium', ['PrototipoProgium.services', 'ngRoute']);

App.controller('MainController', function($scope, $route, $routeParams, $location) {
     $scope.$route = $route;
     $scope.$location = $location;
     $scope.$routeParams = $routeParams;
})

App.config(function($routeProvider, $locationProvider) {
  	$routeProvider
		.when('/iniciosesion', {
			templateUrl: 'iniciosesion.html',
			controller: 'IniciarSesionController'
		})
		.when('/registrarcatalogo', {
			templateUrl: 'RegistrarCatalogo.html',
			controller: 'RegistrarCatalogoController'
		})
		.when('/registrarcotizacion', {
			templateUrl: 'registrarCotizacion.html',
			controller: 'RegistrarCotizacionController'
		})
		.when('/menucliente', {
			templateUrl: 'menucliente.html',
			controller: 'MenuClienteController'
		})
		.when('/menuadministrador', {
			templateUrl: 'menuadministrador.html',
			controller: 'MenuAdministradorController'
		})
		.when('/registrarcatering', {
			templateUrl: 'registrarcatering.html',
			controller: 'registrarCateringController'
		})
		.when('/registrarcatalogo', {
			templateUrl: 'registrarcatalogo.html',
			controller: 'RegistrarCatalogoController'
		})
		.when('/buscarcatering', {
			templateUrl: 'buscarcatering.html',
			controller: 'BuscarCateringController'
		})
		.otherwise({
        	redirectTo: '/iniciosesion'
		});
});