$(document).ready(init);

var currentSection = null;

function init()
{
	currentSection = $('');
	$('').click(onClickConcurso);
	$('').click(onClickAnadirConcurso);
	$('').click(onClickEmpresa);
	$('').click(onClickAñadirEmpresa);
	$('').click(onClickInicio);
    
}

function onClickHome(){
    
	gotoSection('');
}

function gotoSection(_identificador)
{
	currentSection.removeClass('visible');
	var nextSection = $('#'+_identificador);

	nextSection.addClass('visible');
    currentSection = nextSection;
	
}