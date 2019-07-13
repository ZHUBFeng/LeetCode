/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */

 
var buildTree = function (preorder, inorder) {
  if (!preorder.length) {
    return null
  }

  var tree = new TreeNode(preorder[0])

  var root = inorder.indexOf(preorder[0])

  var preorderL = preorder.slice(1, root + 1)
  var inorderL = inorder.slice(0, root)

  var preorderR = preorder.slice(root + 1)
  var inorderR = inorder.slice(root + 1)

  if (preorderR.length == 0 && inorderR.lenght == 0) {
    return null
  }

  if (preorderR.length) {
    tree.right = buildTree(preorderR, inorderR)
  }
  if (preorderL.length) {
    tree.left = buildTree(preorderL, inorderL)
  }

  return tree
};