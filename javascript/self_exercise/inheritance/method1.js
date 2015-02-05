//Method 1- just inheriting the prototype from the parent
function Building(numWin, area){
    this.window=numWin;
    this.area=area;
    var privatemsg='This is a private message';
    this.stand=function() {
        console.log(privatemsg);
    }
}
Building.prototype.roof=true;

function House(bath){
    this.bath=bath;
}
/* INHERITANCE CODE: */  House.prototype=Object.create(Building.prototype);
/*Required code */ House.constructor = House;

//Inherits just the prototype from the parent