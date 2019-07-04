//mothed 2
function multiply(num1,num2){
  if(num1.length < num2.length){
    return multiply(num2,num1)
  }
  var map = []
  var temp = '0'
  for(var i = 0; i <= 9; i++){
    map.push(temp)
    temp = addStrings(temp,num1)
  }

  var result = ''
  var num
  var zero = ''
  for(var i = num2.length - 1; i >= 0; i--){
    num = map[num2[i]]
    result = addStrings(result,num + zero)
    zero += '0'
  }
  return result
}


//method 1
// var multiply = function(num1, num2) {
//   if(num1.length <= num2.length){
//       var muld = num1
//       var mul = num2
//   }else{
//       muld = num2
//       mul= num1
//   }
//   if(muld === '0'){
//       return '0'
//   }
//   var r = 0
//   var m = 1
//   for(var i = muld.length - 1; i >= 0; i--){
//       var str = ''
//       var c = 0
//       for(var j = mul.length - 1; j >= 0; j--){
//           r = (muld[i] * mul[j] + c) % 10
//           c = Math.floor((muld[i] * mul[j] + c) / 10)
//           str = r + str
//       }
//       if(c != 0){
//           str = c + str
//       }
//       if(i == muld.length - 1){
//           var result = str
//       }else{
//           for(var n = 0; n < m; n ++){
//               str += '0'
//           }
//           m++
//           result = addStrings(result,str)
//       }
//   }
//   return result
// };

var addStrings = function(nums1,nums2){
  var w1 = nums1.length - 1
  var w2 = nums2.length - 1
  var sum = ''
  var carry = 0
  var remain
  while(w1 >= 0 || w2 >= 0){
      remain = ((~~nums1[w1]) + (~~nums2[w2]) + carry) % 10
      carry =  ((~~nums1[w1]) + (~~nums2[w2]) + carry - remain) / 10
      sum = remain + sum
      w1--
      w2--
  }
  if(carry != 0){
      sum = carry + sum
  }
  return sum
}