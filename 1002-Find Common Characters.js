var commonChars = function(A) {
  var strs = []
  var map = {}
  
  for(var i = 0; i < A.length; i++){
      var str = A[i]
      map[i] = {}
      for(var j = 0; j < str.length; j++){
          if(str[j] in map[i]){
              map[i][str[j]]++
          }else{
              map[i][str[j]] = 1
          }
      }
  }
  
  for(var n = 0; n < A[0].length; n++){
      var a = map[0][A[0][n]]
      for(var m = 1; m < A.length; m++){
          if(map[m][A[0][n]] !== undefined && map[m][A[0][n]] > 0){
              if(map[m][A[0][n]] < a){
                  a = map[m][A[0][n]]
              }
              map[m][A[0][n]] = 0
              if(m == A.length - 1){
                  for(var h = 0; h < a; h++){
                      strs.push(A[0][n])
                  }
              }
           }else{
               break
           }
      }
  }
  
  return strs
};
