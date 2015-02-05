
//Creates a space that encloses this format function, allowing it to take precedence over the other Format function
//The Format called in the ShowMessage refers to the one defined in the closure

(function(){
function Format(num){
	return Math.floor(num);
}

ShowMessage("You are viewing a lesson in section " + Format(9.1));})()