/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[]}
 */

 
var binaryTreePaths = function (root) {
  var res = []
  var str = []

  traverse(root)
  return res

  function traverse(root) {
    if (!root) {
      return
    }

    str.push(root.val)

    if (!root.left && !root.right) {
      res.push(str.join('->'))
    } else {
      traverse(root.left)
      traverse(root.right)
    }

    str.pop()
  }
};