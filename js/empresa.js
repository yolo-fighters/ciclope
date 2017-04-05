$(document).ready(init);
function init(){
    htmlImagenes();
}
function htmlImagenes (){
    console.log('loca..!');
    var listaImg=[
        { "imagen":'img/ceviche.jpg', "Text":"Ceviche al macho", "mes":"Marzo"},      
        { "imagen":'img/ceviche.jpg', "Text":"Ceviche al macho", "mes":""},      
        { "imagen":'img/ceviche.jpg', "Text":"Ceviche al macho", "mes":""},      
        { "imagen":'img/ceviche.jpg', "Text":"Ceviche al macho", "mes":""},      
        { "imagen":'img/ceviche.jpg', "Text":"Ceviche al macho", "mes":""}      
    ]
    var carga= '';
    for(var i in listaImg){
        var html='<div class="col-md-2"><img src="'+listaImg[i].imagen+'" alt="">'+
            '<p>'+listaImg[i].Text+'</p></div>'
        carga+=html;
    }
    $('#lista').html(carga);
    $('#lista2').html(carga);
    $('#lista3').html(carga);
    //$('.fechaMes').html(listaImg[i].mes);
    //console.log( $('.fechaMes').html(listaImg[i].mes);)
}








/*$("#chart-container").insertFusionCharts({
    type: "column2d",
    width: "400",
    height: "350",
    dataFormat: "json",
    dataSource: {
        chart: {
            caption: "Harry's SuperMart",
            subCaption: "Top 5 stores in last month by revenue",
            numberPrefix: "$",
            theme: "ocean"
        },
        data: [{
            label: "Bakersfield Central",
            value: "880000"
        }, {
            label: "Garden Groove harbour",
            value: "730000"
        }, {
            label: "Los Angeles Topanga",
            value: "590000"
        }, {
            label: "Compton-Rancho Dom",
            value: "520000"
        }, {
            label: "Daly City Serramonte",
            value: "330000"
        }]
    }
});*/