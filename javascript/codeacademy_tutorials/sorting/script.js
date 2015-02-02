var msg=document.getElementById('message');

var v=[30, 2, 1, 9, 15]

msg.innerHTML+= '<p><strong>Original order</strong>['+v+']</p>';

v.sort();
msg.innerHTML+= '<p><strong>After</strong>['+v+']</p>';

v.sort(sortLowToHigh);
msg.innerHTML+= '<p><strong>After</strong>['+v+']</p>';

v.sort(sortHighToLow);
msg.innerHTML+= '<p><strong>After</strong>['+v+']</p>';

v.sort(function(a, b){return a-b;});
msg.innerHTML+= '<p><strong>After</strong>['+v+']</p>';


function sortLowToHigh(a,b){
	return a - b;
}

function sortHighToLow(a,b){
	return b - a;
}