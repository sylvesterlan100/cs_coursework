
//Link to parse
Parse.initialize("WiW5uu5p3uFnPwmXpIBvYsvqN5mt0BjDSp61z2e8", "2EGEWiucv7hQuzBsMI9JQ361Ro1kUpdXa2k4xBQZ");

//Two objects you want to store into your database
var obj={name:'apple', price:'12:00', color:'red'};
var obj2={name:'coke', price: '3:00'}

//Function which adds to the fruit section of your database
function addFruit(myobj){
	//Link to the fruit section in your database
	var Fruit = Parse.Object.extend("Fruit");

	//Create a cubby hole in your fruit section
	var apple = new Fruit();

	//Update your cubby hole online with object you want to save 
	apple.save(myobj, {success: function(object){
	        //If didn't save
	        alert('saved');
	      },
	      error: function(model, error){
	      	//If did save
	        alert("didn't save");
	      }});
}

//Saving to your Drink section in your database
function addDrink(myobj){
	var Drink = Parse.Object.extend("Drink");
	var mydrink = new Drink();
	mydrink.save(myobj, {success: function(object){
	        $(".success").show();
	      },
	      error: function(model, error){
	        $(".error").show();
	      }});
}

//Create a link to a specific section in my parse.object database
var Fruit = Parse.Object.extend("Fruit");

//Create an object that can interact with my database
var query = new Parse.Query(Fruit);

function showMe(results){
	alert(results[0].attributes.name);
}

//Search by id
query.find({
  success: function(results) {
   		alert(results[0].attributes.name);

  },
  error: function(error) {
    alert("Error: " + error.code + " " + error.message);
  }
});











	