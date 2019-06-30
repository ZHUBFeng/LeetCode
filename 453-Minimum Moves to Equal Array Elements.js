//N-1 will increase by 1 = one element decreas by 1

var minMoves = function(nums) {
  nums = nums.sort(function(a,b) {return a - b})
  var result = 0
  for(var i = 1; i < nums.length; i++){
      result += nums[i] - nums[0]
  }
  return result
};


// time exceeded

/* var minMoves = function(nums) {
    var sum = 0
    nums = nums.sort(function(a,b) {return a - b})
    for(var i = 1; i < nums.length; i++){
        nums = nums.sort(function(a,b) {return a - b})
        if(nums[i] != nums[i - 1]){
            sum++
            for(var j = 0; j < nums.length - 1; j++){
                nums[j]++
            }
            i = 0
            continue
        }
    }
    return sum
}; */