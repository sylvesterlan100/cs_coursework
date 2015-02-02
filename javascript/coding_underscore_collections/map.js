function forEach(col, func){
    for(var i in col)
        func(col[i], i, col);
}

function map(col, func){
    if(col.constructor==Array)
        var final=[];
    else
        var final={};
        
    forEach(col, function(ele, index, array){
        final[index]=(func(ele))    
    });
    return final;
}