var msg = document.getElementById('message');
var v=['dog', 'buffalo', 'cat', 'zebra', 'frog', 'antelope', 'aardvark', 'elephant'];
msg.innerHTML+= '<p><strong>Original order:<strong/>['+v+']</p>';

//Sort words by alphabetical order, ignoring case
v.sort(function(a, b){return a.toLowerCase().charCodeAt(0)-b.toLowerCase().charCodeAt(0)});
msg.innerHTML+= '<p><strong>Alphabetical order:<strong/>['+v+']</p>';

//Sort words by length
v.sort(function(a, b){return a.length-b.length});
msg.innerHTML+= '<p><strong>Length order:<strong/>['+v+']</p>';