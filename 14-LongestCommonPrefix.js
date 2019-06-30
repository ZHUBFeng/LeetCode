var longestCommonPrefix = function(strs) {
    var str = ''
    var w = strs.length
    if(w == 0){
        return str
    }
    
    var n = 0
    while(true){
        for(var m = 0; m < w; m++){
            if(strs[m][n] != strs[0][n] || n >= strs[m].length || strs[m].length == 0){
                return str
            }
        }
        str += strs[0][n]
        n++
    }
    return str
};




