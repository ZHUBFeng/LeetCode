var intToRoman = function(num) {
  var nums = [1000,900,500,400,100,90,50,40,10,9,5,4,1];
  var roman = ["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"];
  
  var str = '' 
  
  while(num){
      for(var i = 0; ;i++){
          var q = Math.floor(num / nums[i])
          if(q > 0){
              break
          }
      }
      while(q--){
          str += roman[i]
          num = num - nums[i]
      }
  }
  return str
};