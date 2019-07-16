/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
function swap(ary, i, j) {
  if (i != j) {
    var a = ary[i]
    ary[i] = ary[j]
    ary[j] = a
  }
}

var findKthLargest = function (nums, k) {
  var l = nums.length
  return partation(nums)[l - k]

  function partation(nums, start = 0, end = nums.length - 1) {
    if (end - start <= 0) {
      return nums
    }
    var pivotIndex = Math.floor(Math.random() * (end - start - 1) + start)
    var pivotValue = nums[pivotIndex]

    swap(nums, pivotIndex, end)

    var i = start - 1
    for (var j = start; j < end; j++) {
      if (nums[j] < pivotValue) {
        i++
        swap(nums, i, j)
      }
    }
    i++
    swap(nums, i, end)

    if (i == l - k) {
      return nums
    } else if (i < l - k) {
      partation(nums, i + 1, end)
    } else {
      partation(nums, start, i - 1)
    }
    return nums
  }
}

// var findKthLargest = function(nums, k) {
//     for(var i = 0; i < k; i++){
//         for(var j = i + 1; j < nums.length; j++){
//             if(nums[i] < nums[j]){
//                 var a = nums[i]
//                 nums[i] = nums[j]
//                 nums[j] = a
//             }
//         }
//     }
//     return nums[k - 1]
// };