function init() {
    $("#a-results").click(onResultsClick);
    
    //$("#btn-a").click(onButtonClick);
    $("#datepicker").change(onDateChange);
    $(".add-pto").click(addPoints);
    $(".icon-trophy2").click(showPremios);
}

function onResultsClick() {
    $("#inicio").hide();
    $("#sorteo").hide();
    $("#resultados").show();
}

function showPremios() {
    $("#sorteo").hide();
    $("#premios").show();
}

function addPoints() {
    console.log("addpoint");
}
/*
function onButtonClick(){
    console.log("si");
    $.ajax({
        type: 'GET',
        url: 'http://192.168.0.132:3000/api/todosConcursos',
        dataType: 'json',
        contentType: 'application/json; charset=UTF-8',
        success: function(data){
            console.log(data);
            var dataG = data.result[0].nombre;
            //son dos atributos
            console.log(dataG);
        },
        error: function(res, msg){
            console.log(res + msg);
        }
    })
}
*/
$( function() {
    $( "#datepicker" ).datepicker();
} );

function onDateChange() {
    $("#resultados .col-md-9").html("");
    var meses = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];
    var dias = ["Lunes","Martes","Miercoles","Jueves","Viernes","Sabado","Domingo"];
    var date = $("#datepicker").val();
    var arrayDate = date.split("/");
    var tmpDate = new Date(arrayDate[2], arrayDate[0]-1, arrayDate[1]);
    var mes = tmpDate.getMonth();
    var dia = tmpDate.getDate();
    var year = tmpDate.getFullYear();
    console.log(tmpDate);
    var html = '<h1>Resultados del '+dia+' de '+meses[mes]+' del '+year+'</h1>';
    $("#resultados .col-md-9").append(html);
}

// ---------------------------------------------------------------------------- AGREGAR PUNTOS ------------------>
var app = angular.module("myApp", []);
app.controller("MainController", function($scope, $http) {
    $scope.getConcursos = function(){
        $http.get('http://192.168.0.126:3000/api/todosConcursos').then(function(response) {
          console.log(response);
          $scope.test = response.data.result[0].nombre;
          $scope.$apply;
      })
    };
    $scope.test = "Prueba";
    
});



app.controller("sorteoController", function($scope, $http) {
    $scope.platos=[];
    $scope.domain = "http://192.168.0.132:3000";      
    $scope.showName = function(){
        var url = $scope.domain + '/api/todosConcursos/user/usr01';
        $http.get(url).then(function(response) {
            console.log(response);
            for (var index = 0; index < response.data.result.length; index++) {
                $scope.platos.push(response.data.result[index]);
                $scope.$apply;
            }
        });
    };    
    
    $scope.showName();
    
    $scope.participantes = [
        {
            concurso: "Ceviche de Pescado",
            winner: "Usuario",
            empresa: "Purito Limon",
            puntos: 0
        },
        {
            concurso: "Ceviche de Tiburon",
            winner: "Usuario",
            empresa: "Purito Limon",
            puntos: 0
        },
        {
            concurso: "Ceviche de Farfan",
            winner: "Usuario",
            empresa: "Purito Limon",
            puntos: 0
        }
    ];
    $scope.plusOne = function(index){
        $scope.participantes[index].puntos += 1;
    };
});

//$(".add-pto").click
/* -------------------------------------------------------------------------------------- PREMIOS ------- */

app.controller('premioController',['$scope',function($scope){
  $scope.premios = [
    {
      empresa: 'Casa Andina',
      concurso: "Dos noches todo pagado",
      winner: "fabiola",
      tipo: 'todo',
      codigo: "ceviche",
      detalle: "Un ceviche de pescado gratuito",
      canjeado: true,
      urllogo: 'img/casa.gif',
        url: 'img/hotel1.jpg'
    },
      {
      empresa: 'Marriot',
      concurso: "Una noche para una pareja",
      winner: "fabiola",
      tipo: 'todo',
      codigo: "ceviche",
      detalle: "Dos noches en una habitacion",
      canjeado: true,
        urllogo: 'img/marriott.png',
          url: 'img/hotel2.jpg'
    },
    {
      empresa: 'Sheraton',
      concurso: "Una noche y desayuno",
      winner: "fabiola",
      tipo: 'todo',
      codigo: "ceviche",
      detalle: "habitacion simple",
      canjeado: true,
      urllogo: 'img/sheraton.png',
        url: 'img/hotel3.jpg'
    }
  ];
    
    $scope.descuentos = [
    {
        nombre: "Descuento del 10% en bebidas",
        descuento: "10%",
        urlEmpresa: "img/",
        urlElemento: "img/"
    },
    {
        nombre: "Descuento del 15% en comidas",
        descuento: "15%",
        urlEmpresa: "img/",
        urlElemento: "img/"
    },
    {
        nombre: "Descuento del 40% por dos personas",
        descuento: "40%",
        urlEmpresa: "img/",
        urlElemento: "img/"
    }
  ];
}]);


