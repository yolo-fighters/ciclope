$(document).ready(init);
function init(){
    htmlImagenes();
    $('#escanea').click(escanear);
    $('#inicio').click(secInicio);
}


function htmlImagenes (){
    console.log('loca..!');
    var listaImg=[
        { "imagen":'img/ceviche.jpg', "Text":"Ceviche al macho", "mes":"Marzo"},      
        { "imagen":'img/ceviche.jpg', "Text":"Ceviche al macho", "mes":""},      
        { "imagen":'img/ceviche.jpg', "Text":"Ceviche al macho", "mes":""},      
        { "imagen":'img/ceviche.jpg', "Text":"Ceviche al macho", "mes":""},      
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

function escanear(){
    $('#jugadores').hide();
    $('#sectionScanea').show();
}



function secInicio(){
    $('#jugadores').show();
    $('#sectionScanea').hide();
}