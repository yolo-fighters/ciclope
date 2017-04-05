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