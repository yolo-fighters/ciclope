var app = angular.module("MyApp", []);

app.controller("controllerEmpresas", function($scope, $http) {
	$scope.listaEmpresas = [];
	$scope.getEmpresas = function() {
		$http.get("http://192.168.0.132:3000/api/todasEmpresas").then(function(response) {
			for (var index = 0; index < response.data.result.length; index++) {
				$scope.listaEmpresas.push(response.data.result[index]);		
			}
			$scope.$apply;
		})
	}
	$scope.addEmpresa = function() {
		$scope.listaEmpresas.push({nombre: "test"});
		console.log($scope.listaEmpresas);
		$scope.$apply;
	}
	$scope.getEmpresas();
});









$(document).ready(init);

var currentSection = null;

function init()
{
	currentSection = $('.visible');
	$('#inicio').click(onClickInicio);
	$('#concursos').click(onClickConcurso);
	$('#anadirConcurso').click(onClickAnadirConcurso);
	$('#empresa').click(onClickEmpresa);
	$('#anadirEmpresa').click(onClickAnadirEmpresa);
	$('#inicio').click(onClickInicio);
    
}

function onClickInicio(){
    gotoSection('btn-inicio');
}

function onClickConcurso(){
	gotoSection('btn-concurso');
}

function onClickAnadirConcurso(){
	gotoSection('btn-anadirConcurso');
}

function onClickEmpresa(){
	gotoSection('btn-empresa');
}

function onClickAnadirEmpresa(){
	gotoSection('btn-anadirEmpresa');
}

function gotoSection(_identificador)
{
	currentSection.removeClass('visible');
	var nextSection = $('#'+_identificador);

	nextSection.addClass('visible');
    currentSection = nextSection;
	
}