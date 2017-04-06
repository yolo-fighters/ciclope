$(document).ready(init);
function init(){
    htmlImagenes();
    $('#escanea').click(escanear);
    $('#inicio').click(secInicio);
}

//FUNCION PARA LISTA DE COSAS GRATIS
function htmlImagenes (){
    console.log('loca..!');
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
//FUNCION PARA EL CALENDARIO
$(function(){
    $("#datepicker").datepicker();
    $("#datepicker2").datepicker();
});