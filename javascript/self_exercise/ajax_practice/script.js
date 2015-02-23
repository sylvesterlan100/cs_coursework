var xhr=new XMLHttpRequest();
xhr.open("GET", "req.php?t="+Math.random(), true);
xhr.send();

var i=0;
xhr.onreadystatechange=function(){
	
	
	if(xhr.readyState==4&&xhr.status==200)
	{
		alert(xhr.responseText);
	}
}