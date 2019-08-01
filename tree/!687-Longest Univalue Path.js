/**
 * @param {TreeNode} root
 * @return {number}
 */
var longestUnivaluePath = function (root) {
  var ans = 0
  helper(root)
  return ans

  function helper(root) {
    if (!root) {
      return 0
    }

    var left = helper(root.left)
    var right = helper(root.right)

    if (root.left) {
      if (root.val == root.left.val) {
        left++
      } else {
        left = 0
      }

    }

    if (root.right) {
      if (root.val == root.right.val) {
        right++
      } else {
        right = 0
      }
    }

    ans = Math.max(ans, left + right)
    return Math.max(left, right)

  }
};