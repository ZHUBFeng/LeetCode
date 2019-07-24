/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function (root) {
  if (!root) {
    return true
  }
  var min
  var max
  var nodes = [root]

  while (nodes.length) {
    var node = nodes.shift()
    if (node.left) {
      nodes.push(node.left)
      max = node.left.val
      max = findMax(node.left, max)
      if (node.val <= max) {
        return false
      }
    }
    if (node.right) {
      nodes.push(node.right)
      min = node.right.val
      min = findMin(node.right, min)
      if (node.val >= min) {
        return false
      }
    }
  }

  return true


  function findMin(root, min) {
    if (!root) {
      return min
    }
    if (root.val < min) {
      min = root.val
    }
    return Math.min(min, findMin(root.left, min), findMin(root.right, min))
  }

  function findMax(root, max) {
    if (!root) {
      return max
    }
    if (root.val > max) {
      max = root.val
    }
    return Math.max(max, findMax(root.left, max), findMax(root.right, max))
  }
};
