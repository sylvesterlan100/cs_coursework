para=document.getElementById('message');

function show(msg){
	para.innerHTML+='<p>'+msg+'</p>';
}

//Location methods

show('protocol: '+window.location.protocol);
show('hostname: '+window.location.hostname);
show('port: '+window.location.port);
show('pathname: '+window.location.pathname);
show('search: '+window.location.search);
show('hash: '+window.location.hash);

if(window.confirm('Open Google?')){
	window.location='https://www.google.com/'
}