/**
 * @param {number[]} nums
 * @return {number}
 */

 //法一 动态规划
var rob = function (nums) {
  var solution = {}

  solution[-1] = 0
  solution[0] = nums[0]

  for (var i = 1; i < nums.length; i++) {
    solution[i] = Math.max(solution[i - 1], solution[i - 2] + nums[i])
  }
  return solution[nums.length - 1]
}

//法二
var rob = function (nums) {
  var w = nums.length

  if (w == 0) {
    return 0
  }
  if (w == 1) {
    return nums[0]
  }

  var money = new Array(w)
  money[0] = nums[0]
  money[1] = nums[1]

  for (var i = 2; i < w; i++) {
    money[i] = nums[i] + Math.max(...money.slice(0, i - 1))
  }

  return Math.max(money[w - 1], money[w - 2])

};