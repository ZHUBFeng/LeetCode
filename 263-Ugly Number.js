var isUgly = function(num) {
  if(num == 0){
      return false
  }
  var flag = true
  while(num != 1){
    if(num % 2 == 0){
      num = num / 2
    }else{
      break
    }
  }
  while(num != 1){
    if(num % 3 == 0){
      num = num / 3
    }else{
      break
    }
  }
  while(num != 1){
    if(num % 5 == 0){
      num = num / 5
    }else{
      flag = false
      break
    }
  }
  return flag
};