var msg=document.getElementById('message');

//Create an object called car (if 'car' isn't being used)
var car= car || {};
car.make = "Ford";
car.model = "mustang";
car.color = "blue";

//Dislaying properties of the object
car.display=function(){
	msg.innerHTML += '<p>Your color is a '+this.color+" "+this.make+'</p>'
}

//Altering the properties of an object
car['color']='red';
car.color='red';
car.display();


