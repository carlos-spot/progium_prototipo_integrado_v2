'use strict';

/**
 * IniciarSesionController
 * @constructor
 */

App.controller('IniciarSesionController', function($scope, $location) {
  $scope.mostrarMensaje = false;
  $scope.menuCliente = false;
  $scope.menuAdmin = false;
  $scope.usuario = {};
  
  $scope.init = function() {
    $scope.usuario.nombreAdmi = "administrador@gmail.com",
    $scope.usuario.contrasennaAdmi = "1234"
    $scope.usuario.nombreCliente = "usuariocliente@gmail.com",
    $scope.usuario.contrasennaCliente = "1234"
  };

  $scope.init();

  $scope.iniciarSesion = function() {
    if ($scope.nombre === $scope.usuario.nombreAdmi && $scope.contrasenna == $scope.usuario.contrasennaAdmi || 
          $scope.nombre === $scope.usuario.nombreCliente && $scope.contrasenna == $scope.usuario.contrasennaCliente) {
      //mostrarmenu
      console.log('hola');
      if($scope.nombre === "administrador@gmail.com"){
         console.log('entre');
        $scope.menuAdmin = true;
        $scope.mostrarMensaje = false;
        $location.path('/menuadministrador');
      }else if($scope.nombre === "usuariocliente@gmail.com"){
        console.log('entre2');
        $scope.mostrarMensaje = false;
        $scope.menuCliente = true;
        $location.path('/menucliente');
      }
    } else {
      $scope.mostrarMensaje = true;
    }
  };
});