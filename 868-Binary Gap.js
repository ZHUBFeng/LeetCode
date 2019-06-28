var binaryGap = function(N) {
  var dis = 0
  var j = -1
  var c = 0
  for(var i = 0; N != 0; i++){
      var digit = N % 2 
      if(digit == 1){
          if(j != -1){
            dis = i - j
          }
          if(dis < c){
              dis = c
          }
          j = i
          c = dis
      }
      N = (N - digit) / 2
  }
    return dis
};

console.log(binaryGap(8))