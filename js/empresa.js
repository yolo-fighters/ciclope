$(document).ready(init);
function init(){
    htmlImagenes();
    $('#escanea').click(escanear);
    $('#inicio').click(secInicio);
}

//FUNCION PARA LISTA DE COSAS GRATIS
function htmlImagenes (){
    var listaImg=[
        { "imagen":'img/ceviche.jpg', "Text":"Ceviche al macho", "mes":"Marzo"},      
        { "imagen":'img/ceviche.jpg', "Text":"Ceviche al macho", "mes":""},      
        { "imagen":'img/ceviche.jpg', "Text":"Ceviche al macho", "mes":""},      
        { "imagen":'img/ceviche.jpg', "Text":"Ceviche al macho", "mes":"Junio"},      
        { "imagen":'img/ceviche.jpg', "Text":"Ceviche al macho", "mes":""}      
    ];
    var carga= '';
    for(var i in listaImg){
        var html='<div class="col-md-2"><img src="'+listaImg[i].imagen+'" alt="">'+
            '<p>'+listaImg[i].Text+'</p></div>'
        carga+=html;
    }
    $('#lista').html(carga);
}
//FUNCIONES PARA NAVEGAR SECIONES
function escanear(){
    $('#jugadores').hide();
    $('#sectionScanea').show();
}

function secInicio(){
    $('#jugadores').show();
    $('#sectionScanea').hide();
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






