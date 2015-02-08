var table=document.getElementById('multiplication');
var tcols=document.getElementsByTagName('col');


table.addEventListener('mouseover', TableHandler);

table.addEventListener('mouseout', TableHandler);

function TableHandler(e){
	var t = e.target;
	if(t.nodeName!='TD')
		return;
	var cName = (e.type == 'mouseover' ? 'active' : '');
	document.getElementById('msg').innerHTML+=t.cellIndex
	t.parentNode.className=cName;
	tcols[t.cellIndex].className=cName;
}