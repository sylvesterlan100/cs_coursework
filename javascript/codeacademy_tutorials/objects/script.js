var msg=document.getElementById('message');

var car= car || {};
car.make = "Ford";
car.model = "mustang";
car.color = "blue";

car.display=function(){
	msg.innerHTML += '<p>Your color is a '+this.color+" "+this.make+'</p>'
}

car['color']='red';
car.color='red';
car.display();


