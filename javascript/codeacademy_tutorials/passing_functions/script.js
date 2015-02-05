var element=document.getElementById('message');

function recurse(arr){
	if(arr.constructor!=Array)
		element.innerHTML+="<p> Total: "+arr+"</p>";
	else{
		total=0;
		for(var i in arr){
			total+=recurse(arr[i]);
		}
		return total;
	}
}