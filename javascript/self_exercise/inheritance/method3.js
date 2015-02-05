//Method 3: Inherit parent constructor info into Child prototype; Link parent prototype to Child prototype

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
/* INHERITANCE CODE: */  House.prototype= new Building(4, '12 km');   /*THE parameter must be filled or the prototype will have undefined values*/
/*Required code*/ House.constructor = House;

//Inherits just the prototype from the parent