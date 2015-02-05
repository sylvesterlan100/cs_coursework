var msg=document.getElementById('message');

var v=[30, 2, 1, 9, 15]
msg.innerHTML+= '<p><strong>Original order</strong>['+v+']</p>';

v.sort();  //Sort by first character
msg.innerHTML+= '<p><strong>After</strong>['+v+']</p>';

//Creating sorting function that sort by ascending numeric value
//Returns a positive number, a 0, or a negative number
//If return negative, first number precedes second
function sortLowToHigh(a,b){
	return a - b;
}
v.sort(sortLowToHigh);
msg.innerHTML+= '<p><strong>After</strong>['+v+']</p>';

//Creating sorting function that sort by descending numeric value
//Returns a positive number, a 0, or a negative number
function sortHighToLow(a,b){
	return b - a;
}
v.sort(sortHighToLow);
msg.innerHTML+= '<p><strong>After</strong>['+v+']</p>';

//Sort by ascending numeric value with inline function
v.sort(function(a, b){return a-b;});
msg.innerHTML+= '<p><strong>After</strong>['+v+']</p>';



