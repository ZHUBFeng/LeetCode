/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */

// 记录位置
var buildTree = function (inorder, postorder) {
  return buildtree(0, inorder.length - 1, 0, postorder.length - 1)

  function buildtree(i1, i2, p1, p2) {
    if (i1 == i2) {
      return new TreeNode(inorder[i1])
    }
    if (i1 > i2 || p1 > p2) {
      return null
    }

    var tree = new TreeNode(postorder[p2])
    var root = inorder.indexOf(postorder[p2])
    
    //root - 1 - i1 记录左子树个数
    //root - i1 记录右子树个数
    tree.left = buildtree(i1, root - 1, p1, p1 + root - 1 - i1)
    tree.right = buildtree(root + 1, i2, p1 + root - i1, p2 - 1)

    return tree
  }
}

//用slice分割
var buildTree = function (inorder, postorder) {
  if (!postorder.length) {
    return null
  }

  var tree = new TreeNode(postorder[postorder.length - 1])

  var root = inorder.indexOf(postorder[postorder.length - 1])

  var postorderL = postorder.slice(0, root)
  var inorderL = inorder.slice(0, root)

  var postorderR = postorder.slice(root, postorder.length - 1)
  var inorderR = inorder.slice(root + 1)

  if (postorderR.length == 0 && postorderL.lenght == 0) {
    return null
  }

  if (postorderR.length) {
    tree.right = buildTree(inorderR, postorderR)
  }
  if (postorderL.length) {
    tree.left = buildTree(inorderL, postorderL)
  }

  return tree
};