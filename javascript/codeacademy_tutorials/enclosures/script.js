//Function which is called in another library
	function ShowMessage(msg){
		document.getElementById('message').innerHTML+=Format(msg);
	}

//Format function which will take precedence over the format function defined in the other script
	function Format(msg){
		return "<p>"+msg+"</p>";
	}