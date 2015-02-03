var node=document.getElementById('test');
var writeNode=document.getElementById('test1');


function display(){
	if(node.value=='hi'){
		writeNode.innerHTML+='<p>Greetings Human</p>'
	}
	else{
		writeNode.innerHTML+='<p>Unfriendly :(</p>'
	}

}