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
var increasingBST = function (root) {
  var dummy = new TreeNode()
  var tree = dummy

  var right = findRN(root)
  inorder(root)

  return tree
  
  // 即 中序遍历
  function inorder(root) {
    if (root) {
      inorder(root.left)
      dummy.val = root.val

      if (root != right) {
        dummy.right = new TreeNode()
        dummy = dummy.right
      }
      inorder(root.right)
    }
    return dummy
  }
};

//找最右边的叶子节点，使dummy在最后不创建多余节点
function findRN(root) {
  while (root) {
    if (!root.right) {
      return root
    }
    root = root.right
  }
}