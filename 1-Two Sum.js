
//利用map映射
var twoSum = function (nums, target) {
  var map = {}

  for (var i = 0; i < nums.length; i++) {
    var need = target - nums[i]
    if (need in map) {
      return [i, map[need]]
    } else {
      map[nums[i]] = i
    }
  }
};