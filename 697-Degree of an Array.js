/**
 * @param {number[]} nums
 * @return {number}
 */

//利用map映射
var findShortestSubArray = function (nums) {
  var mapLeft = new Map()
  var mapCount = new Map()
  var degree = 0
  var min = nums.length
  for (var i = 0; i < nums.length; i++) {
    if (!mapLeft.has(nums[i])) mapLeft.set(nums[i], i)
    var count = (mapCount.get(nums[i]) || 0) + 1
    mapCount.set(nums[i], count)
    if (count > degree) {
      degree = count
      min = i - mapLeft.get(nums[i]) + 1
    } else if (count === degree) {
      min = Math.min(min, i - mapLeft.get(nums[i]) + 1);
    }
  }
  return min;
};

var findShortestSubArray = function (nums) {
  var map = {}
  var min = Infinity
  var max = -Infinity

  for (var i = 0; i < nums.length; i++) {
    if (nums[i] in map) {
      map[nums[i]].push(i)
    } else {
      map[nums[i]] = [i]
    }
  }

  for (var [key, val] of Object.entries(map)) {
    if (val.length > max) {
      max = val.length
      min = val[val.length - 1] - val[0] + 1
    } else if (val.length == max) {
      var dis = val[val.length - 1] - val[0] + 1
      min = Math.min(dis, min)
    }
  }

  return min
};