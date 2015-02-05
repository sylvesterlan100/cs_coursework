//Select a specific element
function $(ele){
	switch(ele.charAt(0)){
		case '.':
			return document.getElementsByClassName(ele.slice(1, ele.length));
			break;
		case '#':
			return document.getElementById(ele.slice(1, ele.length));
			break;

		default:
			return document.getElementsByTagName(ele);
	}
}

//Write into a specific element
function write(ele, msg){
	if(ele.constructor==String)
		$(ele).innerHTML+= '<p>'+msg+'</p>';
	else
		ele.innerHTML+= '<p>'+msg+'</p>';
}

//Write into the message box
function display(msg){
	write('#message', msg);
}