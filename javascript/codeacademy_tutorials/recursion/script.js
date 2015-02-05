var element=document.getElementById('message');
		var arr=[[1,4,5],3,[[3,2],3,[2,5],1],5,[4,2],3,4]

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