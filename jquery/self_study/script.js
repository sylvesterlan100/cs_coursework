$(document).ready(function(){
	$('.test').on('click', function(){
		var num=$(this).attr('boxid');
		$('#haha'+num).toggle();

	})
});