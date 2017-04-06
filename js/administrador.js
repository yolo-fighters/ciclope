var app = angular.module("MyApp", []);

app.controller("controllerEmpresas", function($scope, $http) {
	$scope.domain = "http://192.168.0.132:3000";
	$scope.listaEmpresas = [];
	$scope.getEmpresas = function() {
		var url = $scope.domain + "/api/todasEmpresas"; $http.get(url).then(function(response) {
			for (var index = 0; index < response.data.result.length; index++) {
				$scope.listaEmpresas.push(response.data.result[index]);		
			}
			$scope.$apply;
		})
	}
	$scope.addEmpresa = function() {
		var url = $scope.domain + "/api/createEmpresa";
		var data = {
			nombre: $scope.nombreEmpresa,
			contacto: $scope.contacto,
			ruc: "12312323",
			latitude: "123123",
			longitude: "asdad"
		}
		$http.post(url, data).then(function(response) {
			alert("Empresa creada con Exito!");
			$scope.listaEmpresas.push(response.data.result);
			$scope.$apply;
		})
	}
	$scope.getEmpresas();
	
});


$(document).ready(init);

var currentSection = null;

function init()
{
	currentSection = $('.visible');
	$('#concursos').click(onClickConcurso);
	$('#anadirConcurso').click(onClickAnadirConcurso);
	$('#empresa').click(onClickEmpresa);
	$('#anadirEmpresa').click(onClickAnadirEmpresa);
	$('#regresar').click(onClickRegresar);
	$('#anadirUsuarios').click(onClickUsuario);
	initMap();
	
}

$(function() {
  $('#file-input').change(function(e) {
      addImage(e); 
     });

     function addImage(e){
      var file = e.target.files[0],
      imageType = /image.*/;
    
      if (!file.type.match(imageType))
       return;
  
      var reader = new FileReader();
      reader.onload = fileOnload;
      reader.readAsDataURL(file);
     }
  
     function fileOnload(e) {
      var result=e.target.result;
      $('#imgSalida').attr("src",result);
     }
    });
  

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

function onClickRegresar(){
	gotoSection('btn-empresa');
}
function onClickUsuario(){
	gotoSection('btn-empresa');
}
//name
function validateM(_evt){
    var name = document.getElementById("r-name").value;
    
    var nameArray= name.split("");
    var primeraLetra= nameArray[0];
    var mayuscula = primeraLetra.toUpperCase();
    var espacio= false;
    
    for (var i=1; i<nameArray.length; i++){
        if(espacio){
            mayuscula += nameArray[i].toUpperCase();
            espacio =false;
        }else
			mayuscula += nameArray[i];
			if(nameArray[i] ==" ")
			espacio = true;
					
			}
	document.getElementById("r-name").value= mayuscula;
}

function validateT(_evt){
	letra = window.event.keyCode;
	
	if((letra>=65 && letra<=90) || letra==8 || letra==32){
		
	}else{
		_evt.preventDefault();
	}
}

//email
function validateEmail(_evt){
    
    var mensaje = $(".mensaje-email");
    var textoEmail = "<h5 style='color:#be3144 ; font-size:18px; font-weight:bold; text-align:center;'>Correo Electrónico Inválido, debe contener ejemplo: hola@dominio.com</h5>";

   if(/([a-zA-Z0-9(-_.)]+[@][a-zA-Z0-9]+[.][a-zA-Z]+)/g.test($("#email").val())){
        mensaje.html('');
    } else {
        if($("#email").val().length >= 0){
            mensaje.html(textoEmail);
        }
    }
}



//email
function validateForm(){
	var correo= document.getElementById("r-email").value;
	
	//var expresion= /\w+@+\w+[.]+[a-z]/g;
	
	if(!/([\w(-_.)]+[@][\w]+[.][\w]+)/g.test(correo)){
		alert ("Email no válido");
	}else
		return false;
}



//password
document.getElementById("r-password").placeholder="Contraseña";




function gotoSection(_identificador)
{
	currentSection.removeClass('visible');
	var nextSection = $('#'+_identificador);

	nextSection.addClass('visible');
    currentSection = nextSection;
	
}

