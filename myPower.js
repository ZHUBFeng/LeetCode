// 递归
// function myPower(x,n){
//   if(n == 0){
//     return 1
//   }
//   if(n % 2 == 0){
//     var t = myPower(x,n / 2)
//     return t * t
//   }else{
//     t = myPower(x,(n - 1) / 2)
//     return t * t  * x
//   }
// }

// 
// var myPow = function(x, n) {
//   var t = 1
//   if(n < 0){
//     var flag = true
//   }
//   if(x == 1 || x == -1){
//       if(n % 2 == 0){
//           return x * x
//       }else{
//           return x
//       }
//   }
//   if(n >= 2147483647 || n <= -2147483648){
//       return 0
//   }
//   n = Math.abs(n)
//   //var digitWidth = Math.floor(Math.log2(n))
//   var digitWidth = 0
//   var m = n
//   while(m){
//     m >>= 1
//     digitWidth++
//   }

//   while(digitWidth >= 0){
//     var d = (n >> digitWidth) % 2
//     if(d == 1){
//       var t = t * t * x
//     }else{
//       t = t * t
//     }
//     digitWidth--
//   }
//   if(flag){
//     return 1 / t
//   }
//   return t
// };


// function myPow(x,n){
//   var result = 1
//   while(n != 0){
//     var t = 1
//     var r = x
//     while(2 * t <= n){
//       r = r * r 
//       t = t * 2
//     }
//     n = n - t
//     result = result * r
//   }
//   return result
// }

//最优解
function myPow(x,n){
  var result = 1
  var t = x

  while(n > 0){
    var digit = n % 2
    if(digit == 1){
      result = result * t
    }
    t = t * t
    n >>= 1
  }
  return result
}
console.log(myPow(2,10))
