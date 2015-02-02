function forEach(col, func){
    for(var i in col)
        func(col[i], i, col);
}


function find(col, func){
    var found=false;
    var value;
    forEach(col, function(ele, index, list){
        if(!found&&func(ele)){
            value=ele;
            found=true;
        }
    })
    if(value)
        return value;
    else
        return false;
}

function findVanilla(col, func){
    for(var i=0; i<col.length-1; i++){
        if(func(col[i]))
            return col[i];
    }
}
