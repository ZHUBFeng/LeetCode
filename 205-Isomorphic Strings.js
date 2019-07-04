var isIsomorphic = function(s, t) {
  if(s===t) return true;
  var lens= s.length;
  var i=1;
  if(lens!== t.length) return false;
  while(i<lens){
     if(s.indexOf(s[i])===t.indexOf(t[i])){
        i++;
     }else{
        break;
     }
  }
  return i === lens;
};

// var isIsomorphic = function(s, t) {
//     var S = string(s)
//     var T = string(t)
//     if(S == T){
//         return true
//     }else{
//         return false
//     }
  
// };

// function string(s){
//     var str = ''
//     var strs = {}
  
//     for(var i = 0; i < s.length; i++){
//         if(s[i] in strs){
//             str += strs[s[i]]
//         }else{
//             strs[s[i]] = i
//             str += i
//         }
//     }
//     return str
// }