var distributeCoins = function (root) {
  var res = 0
  helper(root)
  return res

  function helper(root) {
    if (!root) {
      return 0
    }

    var left = helper(root.left)
    var right = helper(root.right)

    res += Math.abs(left) + Math.abs(right)

    return root.val + left + right - 1
  }
};