//Method 1 and 2; Inherit both prototype and constructor

function Building(numWin, area){
    this.window=numWin;
    this.area=area;
    var privatemsg='This is a private message';
    this.stand=function() {
        console.log(privatemsg);
    }
}
Building.prototype.roof=true;

function House(/*NOTE THE PARAMETER IS UPDATED*/ numWin, area, bath){
    /*Constructor INHERITANCE CODE: */  Building.apply(this, arguments);
    /*ALTERNATIVE Constructor INHERITANCE CODE*/  Building.call(this, numWin, area)
    this.bath=bath;
}

//PROTOTYPE INHERITANCE CODE
House.prototype=Object.create(Building.prototype);