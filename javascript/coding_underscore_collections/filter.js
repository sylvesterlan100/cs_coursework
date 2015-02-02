function forEach(col, func){
    for(var i in col)
        func(col[i], i, col);
}

function filter(col, func){
    var found=[];
    forEach(col, function(ele, index, list){
        if(func(ele)){
            found.push(ele);
        }
    })
    return found;
}

function filterVanilla(col, func){
    var found=[];
    for(var i=0; i<col.length; i++){
        if(func(col[i])){
            found.push(col[i]);
        }
    }
    return found;
}