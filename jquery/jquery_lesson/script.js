$(document).ready(function(){
	
	//selects an element with id myDiv
	//$('#myDiv')
	
	//var str=prompt('choose a div');
		//var str='div1'
		//str='div2'
	
	
	//$('body').children().slideUp().slideDown()
	//$('#div2').slideUp().slideDown()
	
	//$('#div1').hide(1000).show(200).toggle(1000);

	//selects an element with class myDiv
	//$('.myDiv')

	//selects an element with tag div
	//$('div')

	//selects divs with attribute jkname='thirddiv'
	//$('div[jkname="thirddiv"]').slideUp().slideDown();

	$('#div2').closest('body').css({backgroundColor:'yellow'}).fadeOut(2000).fadeIn(2000);




})
