var maxSubArray = function(nums) {
  for(var i = 0; i < nums.length; i++){
      var res = nums[i]
      var max = i == 0 ? res : max
      for(var j = i + 1; j < nums.length; j++){
          res += nums[j]
          if(res > max){
              max = res
          }
      }
  }
  return max
};