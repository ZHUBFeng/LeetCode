var search = function(nums, target) {
  var w = nums.length - 1
  
  var l = 0
  var r = w
  
  while(l <= r){
      var m = l + Math.floor((r - l) / 2)

      if(nums[m] == target){
          return m
      }else if(nums[m] > target){
          r = m - 1
      }else{
          l = m + 1
      }
  }
  // while(r - l > 1)
  // if(nums[l] == target){
  //     return l
  // }
  // if(nums[r] == target){
  //     return r
  // }
  return -1
      
};