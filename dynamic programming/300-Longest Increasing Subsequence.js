/**
 * @param {number[]} nums
 * @return {number}
 */

var lengthOfLIS = function (nums) {
  if (nums.length == 0) {
    return 0
  }

  var dp = new Array(nums.length)
  var maxans = 1
  dp[0] = 1

  for (var i = 1; i < nums.length; i++) {
    var maxval = 0

    for (var j = 0; j < i; j++) {
      if (nums[j] < nums[i]) {
        maxval = Math.max(maxval, dp[j])
      }
    }
    
    dp[i] = maxval + 1
    maxans = Math.max(dp[i], maxans)
  }
  return maxans

  // for(var i = 0; i < nums.length; i++) {
  //     for(var j = 0; j < i; j++) {
  //         if(nums[j] < nums[i]) {
  //             dp[i] = Math.max(dp[j] + 1, dp[i] || 0)
  //         }
  //     }
  //     dp[i] = dp[i] || 1
  // }
  // return Math.max(...dp)
}

//slowly
var lengthOfLIS = function (nums) {
  if (nums.length == 0) {
    return 0
  }

  var hash = new Map()

  for (var i = 0; i < nums.length; i++) {
    var keys = hash.keys()

    var second = null
    for (var key of keys) {
      if (key < nums[i] && (second == null || hash.get(key) > hash.get(second))) {
        second = key
      }
    }

    hash.set(nums[i], (hash.get(second) || 0) + 1)
  }
  return Math.max(...hash.values())
};