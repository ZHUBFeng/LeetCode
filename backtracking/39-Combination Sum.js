/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */

//法一
var combinationSum = function (candidates, target) {
  var result = []
  helper(0, [], 0)
  return result

  function helper(startIdx, nums, sum) {
    if (sum == target) {
      result.push([...nums])
      return
    }

    for (var i = startIdx; i < candidates.length; i++) {
      if (sum < target) {
        nums.push(candidates[i])
        helper(i, nums, sum + candidates[i])
        nums.pop()
      }
    }
  }
}

//法二
var combinationSum = function (candidates, target, i = 0, result = [], nums = []) {
  candidates = candidates.sort()
  if (target == 0) {
    result.push(nums.slice())
    return
  }
  if (i == candidates.length) {
    return
  }

  if (target > 0) {
    nums.push(candidates[i])
    combinationSum(candidates, target - candidates[i], i, result, nums)
    nums.pop()
    combinationSum(candidates, target, i + 1, result, nums)
  }

  return result
}

//法三
var combinationSum = function (candidates, target, result = [], nums = []) {
  if (sum(nums) == target) {
    if (!includes(nums, result)) {
      result.push(nums.slice())
    }
    return
  }
  if (sum(nums) > target) {
    return
  }

  for (var i = 0; i < candidates.length; i++) {
    if (sum(nums) < target) {
      nums.push(candidates[i])
      combinationSum(candidates, target, result, nums)
      nums.pop()
    }
  }

  return result
};

function sum(nums) {
  return nums.reduce((a, b) => a + b, 0)
}

function includes(num, nums) {
  var num1 = num.slice()
  var n1 = num1.sort((a, b) => a - b).toString()
  for (var i = 0; i < nums.length; i++) {
    var num2 = nums[i].slice()
    var n2 = num2.sort((a, b) => a - b).toString()
    if (n1 == n2) {
      return true
    }
  }
  return false
}