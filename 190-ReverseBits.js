var reverseBits = function(n) {
  var sum = 0
  for(var i = 0; i < 32; i++){
      var d = (n >>> i) & 1
      sum = sum * 2 + d
  }
  return sum
};

var reverseBits = function(n) {
  var sum = 0
  for(var i = 0; i < 32; i++){
      var d = (n >>> i) & 1
      sum = (sum << 1) + d
  }
  return sum >>> 0 //转成无符号数返回
};

var reverseBits = function(n) {
  var sum = 0
  for(var i = 0; i < 32; i++){
      var d = n % 2
      sum = (sum * 2) + d
      n = (n - d) / 2
  }
  return sum
};


var reverseBits = function(n) {
  var str = n.toString(2).split("").reverse().join("")
  while(str.length < 32){
      str = str + '0'
  }
  return parseInt(str,2)
};