//最大子序列
//递归 只存在与左边序列 或 右边序列 或 中间
var maxSubArray = function (nums) {
  if (nums.length == 0) {
    return 0
  }
  if (nums.length == 1) {
    return nums[0]
  }

  var l = nums.length
  var mid = Math.floor(l / 2)

  var midMax = 0
  var leftary = 0
  var leftMax = nums[mid]

  for (var i = mid; i >= 0; i--) {
    leftary += nums[i]
    if (leftary > leftMax) {
      leftMax = leftary
    }
  }

  var rightary = 0
  var rightMax = 0

  for (var i = mid + 1; i < nums.length; i++) {
    rightary += nums[i]
    if (rightary > rightMax) {
      rightMax = rightary
    }
  }

  midMax = leftMax + rightMax

  var left = maxSubArray(nums.slice(0, mid))
  var right = maxSubArray(nums.slice(mid))

  return Math.max(midMax, right, left)
}

//O(n^2)
var maxSubArray = function (nums) {
  for (var i = 0; i < nums.length; i++) {
    var res = nums[i]
    var max = i == 0 ? res : max
    for (var j = i + 1; j < nums.length; j++) {
      res += nums[j]
      if (res > max) {
        max = res
      }
    }
  }
  return max
};