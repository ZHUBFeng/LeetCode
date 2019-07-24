/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */

//balanced tree : 节点的两个子树深度之差不超过1
var isBalanced = function (root) {
  var nodes = [root]

  while (nodes.length) {
    var node = nodes.shift()

    if (node) {
      var ldepth = Depth(node.left)
      var rdepth = Depth(node.right)

      if (Math.abs(ldepth - rdepth) > 1) {
        return false
      }
      nodes.push(node.left)
      nodes.push(node.right)
    }
  }
  return true
};

function Depth(root, depth = 0) {
  if (!root) {
    return depth
  }

  var left = Depth(root.left, depth + 1)
  var right = Depth(root.right, depth + 1)

  return Math.max(left, right)
}