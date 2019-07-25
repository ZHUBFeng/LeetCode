/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var bstToGst = function (root) {

  var pre = new TreeNode(0)
  Rinorder(root)
  return root

  function Rinorder(root) {
    if (root) {
      Rinorder(root.right)
      root.val = root.val + pre.val
      pre = root
      Rinorder(root.left)
    }
  }
};