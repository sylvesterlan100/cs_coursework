var body=document.getElementsByTagName('body')[0];
var cool=document.getElementById('cool');

var bx=cool.offsetLeft;
var by=cool.offsetTop;
var bw=cool.offsetWidth;
var bh=cool.offsetHeight;
var dx = 5;
var dy = 5;
var active = true;
 

function Animate(){
	bx+=dx;
	by+=dy;
	cool.style.left = bx+'px';
	cool.style.top = by+'px';

	if(bx+dy<0||bx+bw+dx>body.offsetWidth)
		dx=-dx;
	if(by+dy<0||by+bh+dy>body.offsetHeight)
		dy=-dy;
}

var st=setInterval(Animate, 10)
cool.addEventListener('click', function(){
	clearInterval(st);

})
