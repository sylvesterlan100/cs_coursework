var hey=document.getElementById('myP');

hey.onclick=cancel;
hey.addEventListener('click', cool)

function cancel(){
	alert('hey');
	return false;
}

function cool(){
	alert('wow!');
}

var obj={a:'abc', b:'bcd'};
var v=document.getElementById('inputId')
	


function getElement(){
	var val=document.getElementById('inputId').value
	hey.innerHTML+=val;
}

