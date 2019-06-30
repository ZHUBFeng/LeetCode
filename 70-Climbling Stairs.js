var climbStairs = function(n) {
  var list = []
  if(n == 1){
      return 1
  }else if(n == 2){
      return 2
  }else{
      list[1] = 1
      list[2] = 2
      for(var i = 3; i <= n; i++){
          list[i] = list[i - 1] + list[i - 2]
      }
  }
  return list[n]
};


// var climbStairs = function(n) {
//     var sum = 0
  
//     function solution(i,n){
//         if(i > n){
//             return 0
//         }
//         if(i == n){
//             sum++
//             return 1
//         }
//         return solution(i + 1, n) + solution(i + 2, n)
//     }
  
//     solution(0,n)
  
//     return sum
// };

  

// var climbStairs = function(n) {
//     var count = []
//     function progress(sum){
//         if(sum == n){
//             count.push(1)
//         }else if(sum < n){
//             progress(sum + 1)
//             progress(sum + 2)
//         }
//     }
//     progress(0)
//     return count.length
// };

// 递归 超时
// var climbStairs = function(n) {
//     if(n <= 1){
//         return 1
//     }else{
//         return climbStairs(n - 1) + climbStairs(n - 2)
//     }
// };