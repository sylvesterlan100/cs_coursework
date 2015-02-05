var element=document.getElementById('message');

function recurse(arr, action){
	if(arr.constructor!=Array)
		action(arr);
	else{
		total=0;
		for(var i in arr){
			total+=recurse(arr[i], action);
		}
		return total;
	}
}