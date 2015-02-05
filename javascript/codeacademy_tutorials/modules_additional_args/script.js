
//Create large general library
var Lib=Lib || {};

//Create a subsection of the library
Lib.Output=(function(){
	//Takes in several arguments and use those provided
	function Write(msg, element, start, end, color){
		//Check for presence of color; if none, set default to black
		color=color||'black';
		//Check for element; if none, set default to message
		element=element||'message'

		//Select the element
		if(element.constructor==String){
			var element=document.getElementById(element);
		}
		else
		{
			var element=element
		}
		//Different behavior based on whether the input is a string or array
		if(msg.constructor == String){
			element.innerHTML += '<p style="color:'+color+'">'+msg+'</p>';
		}
		else if(msg.constructor == Array)
		{
			var start = start || 0;
			var end = end || msg.length;
			//Find words in the array from start to end or last element
			newMsg=msg.slice(start, Math.min(end+1, msg.length)).join(' ');
			element.innerHTML += '<p style="color:'+color+'">'+newMsg+'</p>';
		}
	}
	
	function Extend(init, obj){
		var result=init;
		for(var key in obj){
			if (obj.hasOwnProperty(key)){
				result[key]=obj[key]
			}
		}
		return result;
	}

	//Write function but receives an easier to understand object
	function Better(opt){
		
		if(opt.constructor!=Object){
			var test=opt;
			opt={};

			opt.msg=[test];
		}
		
		opt = Extend({
			element: 'message',
			msg: [],
			start: 0,
			color: 'black'
		}, opt);
		Write(opt.msg, opt.element, opt.start, opt.end, opt.color)
	}

	return {Write:Write,
		$:Write,
		WriteBetter:Better}
})();