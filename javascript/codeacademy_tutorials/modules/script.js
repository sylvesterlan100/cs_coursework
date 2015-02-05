
//Create large general library
var Lib=Lib || {};

//Create a subsection of the library
Lib.Output=(function(){

	//Private variables in the subsection
	var element=document.getElementById('message');
	var color='#000';

	//Defining functions that will be returned 
	//These functions have access to the private variables
	function Write(msg){
		element.innerHTML+= FormatMessage(msg);
	}
	function SetColor(col){
		color=col;
	}
	function Clear(){
		element.innerHTML="";
	}
	function FormatMessage(msg){

	}
	//Public functions attached to the 'output' section of the library
	return{
		Write:Write,
		$: Write,
		SetColor:SetColor,
		Clear:Clear
	}


})();