var convertToTitle = function(n) {
  var str = ''
  var list = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
  
  while(n > 0){
      var digit = (n - 1) % 26
      
      n = (n - 1 - digit) / 26
      str = list[digit] + str
  }
  return str
};

var convertToTitle = function(n) {
  var str = ''
  var list = ['Z','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y']

 while(n > 0){
     var digit = n % 26
     
     str = list[digit] + str
     if((n - digit) / 26 == 0){
         return str
     }
     
     n = digit == 0 ? n - 1 : n
     n = Math.floor(n / 26)
 }
 return str
};

