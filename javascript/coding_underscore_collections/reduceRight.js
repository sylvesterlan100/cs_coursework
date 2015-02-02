function reduceRight(col, func, start){
    result=start;
    for(var i=col.length-1; i>=0; i--){
        result=func(result, col[i]);
    }
    return result;
}