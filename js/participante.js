var app =angular.module("Myapp", []);
app.controller("MainController", function($scope, $http) {
    $scope.getConcursos = function(){
      $http.get('http://192.168.0.132:3000/api/todosConcursos').then(function(response) {
          console.log(response);
          $scope.test = response.data.result[0].nombre;
          $scope.$apply;
      })
    }
    $scope.test = "Prueba";
});




function init() {
    $("#a-results").click(onResultsClick);
    
    //$("#btn-a").click(onButtonClick);
    $("#datepicker").change(onDateChange);
}

function onResultsClick() {
    $("#inicio").hide();
    $("#sorteo").hide();
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
