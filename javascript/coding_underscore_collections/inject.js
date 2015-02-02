function forEach(col, func){
    for(var i in col)
        func(col[i], i, col);
}

function inject(col, func, start){
    result=start;
    forEach(col, function(ele, index, array){
        console.log('before ', result)
        result=func(result, ele);
        console.log('after ', result)
    })
    return result;
}

function injectVanilla(col, func, start){
    result=start;
    for(var i in col){
        result=func(result, col[i])
    }
    return result;
}