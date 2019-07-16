var thirdMax = function (nums) {
  var first = nums[0]
  var second
  var third

  for (var i = 1; i < nums.length; i++) {
    if (nums[i] > first) {
      if (second != undefined) third = second
      second = first
      first = nums[i]
    } else if (nums[i] > second && nums[i] < first) {
      third = second
      second = nums[i]
    } else if (nums[i] > third && nums[i] < second) {
      third = nums[i]
    }

    if (second == undefined && nums[i] < first) {
      second = nums[i]
    }
    if (third == undefined && nums[i] < second) {
      third = nums[i]
    }

  }

  if (third == undefined) {
    return first
  }
  return third
};

// var thirdMax = function(nums) {
//     nums = Array.from(new Set(nums))

//     if(nums.length == 1){
//         return nums[0]
//     }
//     if(nums.length == 2){
//         return nums[0] > nums[1] ? nums[0] : nums[1]
//     }

//     var l = nums.length - 3
//     return partation(nums)[l]

//     function partation(nums, start = 0, end = nums.length - 1) {
//         if(end - start <= 0){
//             return nums
//         }
//         var pivotIndex = Math.floor(Math.random() * (end - start - 1) + start)
//         var pivotValue = nums[pivotIndex]

//         swap(nums, pivotIndex, end)

//         var i = start - 1
//         for(var j = start; j < end; j++) {
//             if(nums[j] < pivotValue){
//                 i++
//                 swap(nums, i, j)
//             }
//         }
//         i++
//         swap(nums, i, end)

//         if(i == l){
//             return nums
//         }else if(i < l) {
//             partation(nums, i + 1, end)
//         }else{
//             partation(nums, start, i - 1)
//         }
//         return nums
//     }

// };
// function swap(ary, i, j) {
//     if(i != j){
//         var a = ary[i]
//         ary[i] = ary[j]
//         ary[j] = a
//     }
// }