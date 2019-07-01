// function isPrime(x){
//   var sqrt_x = Math.floor(Math.sqrt(x))
//   if(x < 2){
//     return false
//   }

//   for(var i = 2; i <= sqrt_x; i++){
//     if(x % i == 0){
//       return false
//     }
//   }
//   return true
// }

//优化 但打印出的素数列表有重复
var primeList = []

var countPrimes = function(n) {
  var count = 0
  for(var i = 1; i < n; i++){
      if(isPrimes(i)){
          count++
      }
  }
  return count
};

function isPrimes(x){
  if(x < 2){
    return false
  }
  var sqrt_x = Math.floor(Math.sqrt(x))

  for(var i = 0; primeList[i] <= sqrt_x; i++){
    if(x % primeList[i] == 0){
      return false
    }
  }
  primeList.push(x)
  return true
}
