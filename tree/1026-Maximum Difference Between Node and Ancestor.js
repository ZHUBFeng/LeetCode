/**
 * @param {TreeNode} root
 * @return {number}
 */

var maxAncestorDiff = function (root) {
  var res = []
  helper(root)
  return Math.max(...res)

  function helper(root, max = 0, min = 0, depth = true) {
    if (!root) {
      res.push(max - min)
      return
    }

    max = root.val > max ? root.val : max

    if (depth) {
      min = max
    } else {
      min = root.val < min ? root.val : min
    }

    helper(root.left, max, min, false)
    helper(root.right, max, min, false)
  }
};