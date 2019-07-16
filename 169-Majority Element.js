//投票算法
var majorityElement = function (nums) {
  var map = {}
  var a
  for (var i = 0; i < nums.length; i++) {
    if (nums[i] in map) {
      map[nums[i]]++
    } else {
      if (map[a] > 0) {
        map[a]--
        if (map[a] == 0) {
          var a
          map = {}
        }
        continue
      }
      a = nums[i]
      map[nums[i]] = 1
    }
  }

  for (var b in map) {
    return b
  }
}

//找中位数
// var majorityElement = function(nums) {
//     var l = Math.floor(nums.length / 2)
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