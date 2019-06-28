var fizzBuzz = function(n) {
  var str = []
  for(var i = 1;i <= n; i++ ){
    if(i % 3 == 0){
      if(i % 5 == 0){
        str.push("FizzBuzz")
      }else{
        str.push("Fizz")
      }
    }else if(i % 5 == 0){
      str.push("Buzz")
    }else{
      str.push(i)
    }
  }
  return str
};
var p = fizzBuzz(5)
console.log(p)
  // if(isValid("(()){}")){
  //   console.log("yes")
  // }else{
  //   console.log("no")
  // }