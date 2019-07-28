
var maxProduct = function (nums) {
  if (nums.length === 1) return nums[0];

  let max = nums[0], min = nums[0], output = nums[0];

  for (let i = 1; i < nums.length; i++) {
    let prevMax = max;

    max = Math.max(nums[i], max * nums[i], min * nums[i]);
    min = Math.min(prevMax * nums[i], nums[i], min * nums[i]);

    output = Math.max(max, output);
  }
  return output;
};


// O(n ^ 2)
// var maxProduct = function (nums) {
//   var max = -Infinity
//   var product = 1
//   for (var i = 0; i < nums.length; i++) {
//     for (var j = i; j < nums.length; j++) {
//       product = product * nums[j]
//       if (product > max) {
//         max = product
//       }
//     }
//     product = 1
//   }
//   return max
// };