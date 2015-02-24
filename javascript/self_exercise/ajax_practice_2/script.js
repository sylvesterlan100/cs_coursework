//Get Element By ID
userInput=document.getElementById('person');
suggestion=document.getElementById('suggestions');


function getHint(){
	if(userInput.value==""){
		suggestion.innerHTML='';
	}
	else
	{
		xhr=new XMLHttpRequest();
		xhr.open("GET", "gethint.php?q="+userInput.value, true);
		xhr.send();

		xhr.onreadystatechange=function()
		{
			if(xhr.readyState==4&&xhr.status==200)
				suggestion.innerHTML=xhr.responseText;
		}
	}

}

userInput.addEventListener("keyup", getHint);

