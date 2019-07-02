//153. Find Minimum in Rotated Sorted Array
//33. Search in Rotated Sorted Array

var search = function(nums, target) {
    var index = nums.indexOf(findMin(nums))
    
    if(nums[0] <= nums[nums.length - 1]){
        var l = 0
        var r = nums.length - 1
    }else if(target >= nums[0]){
        l = 0
        r = index - 1
    }else if(target <= nums[nums.length - 1]){
        l = index
        r = nums.length - 1
    }
    
    while(l <= r){
        var m = Math.floor((l + r) / 2)
        if(nums[m] == target){
            return m
        }else if(nums[m] > target){
            r = m - 1
        }else{
            l = m + 1
        }
    }
    return -1
};

var findMin = function(nums) {
  var l = 0
  var r = nums.length - 1
  
  if(r == 0 || nums[l] < nums[r]){
      return nums[0]
  }
  
  while(l <= r){
      var m = Math.floor((r + l) / 2)
      if(l == m & r == m){
          return nums[m]
      }
      if(nums[m] < nums[m + 1] && nums[m] < nums[m - 1]){
          return nums[m]
      }else if((nums[m] >= nums[l]) && nums[m] >= nums[r]){
          l = m + 1
      }else if(nums[m] < nums[l] && nums[m] < nums[r] ){
          r = m - 1
      }else{
          break
      }
  }
  
  
  if(nums[m] > nums[m - 1] && nums[m] < nums[m + 1]){
      r = m - 1
      while(l <= r){
          m = Math.floor((r + l) / 2)
          if(m == l && m == r){
              return nums[m]
          }
          if(nums[m] < nums[m + 1] && nums[m] < nums[m - 1]){
              return nums[m]
          }else{
              r = m - 1
          }
      }
  }
};