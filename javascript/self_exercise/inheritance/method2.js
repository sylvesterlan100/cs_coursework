//Method 2 - just inheriting from the constructor

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
    /* INHERITANCE CODE: */  Building.apply(this, arguments);
    /*ALTERNATIVE INHERITANCE CODE*/  Building.call(this, numWin, area)
    this.bath=bath;
}

//Inherits just the constructor from the parent