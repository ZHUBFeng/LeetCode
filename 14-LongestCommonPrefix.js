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


function Path(targetX,targetY){
    result = []
    function findPath(startX, startY,path){
        if(startX == targetX && startY == targetY){
            result.push(path)
        }else if(startX <= targetX && startY <= targetY){
            findPath(startX + 1, startY, path + '->')
            findPath(startX, startY + 1, path + '|')
        }
    }
    findPath(0,0,'')
    return result
}

function Path(target){
    result = []
    function findPath(start,path){
        if(start == target){
            result.push(path)
        }else if(start < target){
            findPath(start + 1, path + '一步 ')
            findPath(start + 2, path + '两步 ')
        }
    }
    findPath(0,'')
    return result
}

