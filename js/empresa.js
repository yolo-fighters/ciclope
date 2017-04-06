$(document).ready(init);
function init(){
    htmlImagenes();
    $('#escanea').click(escanear);
    $('#inicio').click(secInicio);
    $('.flecha').click(regresoEscaneo);
};
//FUNCIONES PARA NAVEGAR SECIONES
function escanear(){
    $('#jugadores').hide();
    $('#sectionScanea').show();
    $('#premio').hide();
    $('#perdiste').hide();
}

function secInicio(){
    $('#jugadores').show();
    $('#sectionScanea').hide();
    $('#premio').hide();
    $('#perdiste').hide();
}
function regresoEscaneo(){
    $('#sectionScanea').show();
    $('#premio').hide();
    $('#perdiste').hide();
}

//FUNCION PARA LISTA DE COSAS GRATIS
var listaImg;
function htmlImagenes (){
    listaImg=[
        {"imagen":'img/ceviche.jpg',"Text":"Ceviche al macho", "input":'radio',"name":"informacion" },      
        {"imagen":'img/ceviche.jpg',"Text":"Ceviche al macho", "input":'radio',"name":"informacion" },         {"imagen":'img/ceviche.jpg',"Text":"Ceviche al macho","input":'radio', "name":"informacion"}, 
        
        { "imagen":'img/ceviche.jpg',"Text":"Ceviche al macho", "input":'radio',"name":"informacion" },      
        { "imagen":'img/ceviche.jpg', "Text":"Ceviche al macho", "input":'radio',"name":"informacion" }      
    ];
    var carga= '';
    for(var i in listaImg){
        var html='<div class="col-md-2"><img src="'+listaImg[i].imagen+'" alt="">'+
            '<p>'+listaImg[i].Text+'</p> <br><input type="'+listaImg[i].input+'"></div>'
        carga+=html;
    }
    $('#lista').html(carga);
}
//FUNCION PARA GENERAR CALENDARIO
$(function(){
    $("#datepicker").datepicker();
    $("#datepicker2").datepicker();
});
//FUNCTION PARA CAMBIAR DE FECHA
function cambioFecha(){
   $(".col-xs-2").html("");
   $("#fechaMes").html("");
    
    var meses=["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto", "Septiembre","Octubre","Nobienbre","Diciembre"];
    
    var tiempo= $('#datepicker').val();
    
    var listaDatos=tiempo.split("/");
    
    var tmpDate = new Date(listaDatos[2], listaDatos[0]-1, listaDatos[1]);
    var mes = tmpDate.getMonth();
    var dia = tmpDate.getDate();
    var year = tmpDate.getFullYear();
    var html = '<h2>'+year+'</h2>';
    var html2='<span>'+meses[mes]+'</span>'
    $(".col-xs-2").append(html);
    $("#fechaMes").append(html2);    
}

//FUNCION PARA INGRESAR EL CODIGO DE LA EMPRESA
var app = angular.module("Myapp", []);
app.controller("ControladorCodigo",function($scope, $http){
    $scope.domain = "http://192.168.0.132:3000";
    //$scope.show =1;    
    $scope.checkCodigo = function(){
        var url = $scope.domain + '/api/checkPremio/' + $scope.codigo;
        $http.get(url).then(function(response){
            var data = response.data;
            if (data.status == "ok") {
                $('#sectionScanea').hide();
               $('#premio').show();
            }else{
                $('#sectionScanea').hide();
                $('#perdiste').show();
            };
      });
    };
});

app.controller("ControllerClientesYpuntos",function ($scope, $http){
    $scope.contarClientes = function (){
        $http.get('http://192.168.0.126:3000/api/todosConcursos').then(function(responseve){
            console.log(responseve); 
            var datos =responseve.data;
            console.log(datos);
        });
    };
});
