var xhr = new XMLHttpRequest();



var result='';

xhr.onreadystatechange=function(){
	result=xhr.responseText;
	alert(result);
	
}


xhr.open('GET', 'http://www.google.com', true);
xhr.send(null);