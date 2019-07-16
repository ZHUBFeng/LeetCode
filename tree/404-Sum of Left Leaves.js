/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumOfLeftLeaves = function (root) {
  if (!root) {
    return 0
  }

  var nodes = [root]
  var res = 0

  while (nodes.length) {
    var node = nodes.shift()

    if (node.left) {
      nodes.push(node.left)
      if (!node.left.left && !node.left.right) {
        res += node.left.val
      }
    }
    if (node.right) {
      nodes.push(node.right)
    }
  }
  return res
};