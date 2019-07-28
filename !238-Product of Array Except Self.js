/**
 * @param {number[]} nums
 * @return {number[]}
 */

//先从左边累乘，再从右边
var productExceptSelf = function (nums) {
  let res = [];
  let prod = 1;
  for (let i = 0; i < nums.length; i++) {
    res[i] = prod;
    prod *= nums[i];
  }

  prod = 1;
  for (let i = nums.length - 1; i > -1; i--) {
    res[i] *= prod;
    prod *= nums[i];
  }

  return res;
};

//time exceed
// var productExceptSelf = function(nums) {
//     return nums.map((_, idx) => {
//         return nums.filter((_, idx1) => idx1 != idx).reduce((a, b) => a * b)
//     })
// };