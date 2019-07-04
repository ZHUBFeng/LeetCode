var merge = function(nums1, m, nums2, n) {
  var w = m + n
  var i = m - 1
  var j = n - 1
  while(w--){
      if(j < 0 || nums2[j] < nums1[i]){
          nums1[w] = nums1[i]
          i--
      }else{
          nums1[w] = nums2[j]
          j--
      }
  }
};