var Lib = Lib || {};

Lib.Ajax=(function(){
	function Hijack(form, callback){
		var args={};
		for(var i=0; i<form.elements.length; i++){
			var f= form.elements[i];
			if(f.name) args[f.name]=f.value;
		}
		Call(form.action, args, form.method, callback);
	}
	function Call(url, args, type, callback){
		type=(type || 'GET').toUpperCase();
		args=args || {};
		var arglist = '';
		for(var n in args){
			arglist+='&'+n+'='+escape(args[n]);
		}
		if(arglist.length > 0)
			arglist = arglist.substr(1);

		if(type=='GET'){
			url+='?'+arglist;
			arglist=null;
		}
		var xhr = new XMLHttpRequest();
		xhr.open(type, url, true);
		if(callback){
			xhr.onreadystatechange = function(){
				if(xhr.readyState==4&&xhr.status==200){
					callback(xhr.responseText);
				}
			};
		}
		xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
		xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
		xhr.send(arglist);
	}
	return{
		Hijack: Hijack,
		Call: Call
	};
})();

var speedform=document.getElementById('speedform'),
	output = document.getElementById('output');

speedform.addEventListener('submit', function(e){
	e.preventDefault();
	Lib.Ajax.Hijack(speedform, function(r){
		output.innerHTML=r;
	})
})