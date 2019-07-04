
//双指针 + hash table 
//O(N)
var lengthOfLongestSubstring = function(s) {
    if(s.length == 0){
        return 0
    }
    var map = {}
    var j = 0
    var max = 1
    for(var i = 0; i < s.length; i ++){
        var c = s[i]
        if(c in map){
            map[c]++
            if(map[c] == 2){
                while(true){
                    map[s[j]]--
                    j++
                    if(map[c] == 1){
                        max = Math.max(i - j + 1,max)
                        break
                    }
                }  
            }else{
                max = Math.max(i - j + 1,max)
            }
        }else{
            map[c] = 1
            max = Math.max(i - j + 1,max)
        }
    }
    return max 
};