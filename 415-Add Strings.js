var addStrings = function(num1, num2) {
  while(num1.length != num2.length){
      if(num1.length < num2.length){
          num1 = 0 + num1
      }else{
          num2 = 0 + num2
      }
  }
  var w = num1.length
  var str = ''
  var c = 0
  for(var i = w - 1; i >= 0; i--){
      var n = (Number(num1[i]) + Number(num2[i]) + c) % 10
      c = Math.floor((Number(num1[i]) + Number(num2[i]) + c) / 10)
      str = n + str
  }
  if(c != 0){
      str = c + str
  }
  return str
};

console.log(addStrings("999","99"))