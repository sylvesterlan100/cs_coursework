var hey=document.getElementById('myP');

//Give a event to an element
//Subsequent onclick methods overwrite existing ones
hey.onclick=cancel;

//Give an event to an element
//Subsequent addEventListeners give additional behavior to an element
hey.addEventListener('click', cool)

function cancel(){
	alert('hey');
	//Prevent default behavior(Javascript way)
	return false;
}

function cool(){
	alert('wow!');
}


var v=document.getElementById('inputId')	
//Insert text from the input into the paragraph
function getElement(){
	var val=document.getElementById('inputId').value
	hey.innerHTML+=val;
}

