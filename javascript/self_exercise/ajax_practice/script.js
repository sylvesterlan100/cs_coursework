//new request object
var xhr=new XMLHttpRequest();

//give request object instructions
xhr.open("GET", "req.php?t="+Math.random(), true);

//send request out
xhr.send();

//everytime xhr undergoes a state change, activate the following function
xhr.onreadystatechange=function(){
	
	//when the request is processed and ready without error, use the response
	if(xhr.readyState==4&&xhr.status==200)
	{
		alert(xhr.responseText);
	}
}