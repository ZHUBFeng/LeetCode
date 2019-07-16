/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function (root, key) {
  if (!root) {
    return null
  }
  if (root.val > key) {
    root.left = deleteNode(root.left, key)
  }
  if (root.val < key) {
    root.right = deleteNode(root.right, key)
  }
  if (root.val == key) {
    if (!root.left) {
      return root.right
    }
    if (!root.right) {
      return root.left
    }
    if (!root.left && !root.right) {
      return null
    }

    var leftMaxNode = getMaxVal(root.left)
    root.val = leftMaxNode.val
    root.left = deleteNode(root.left, leftMaxNode.val)
  }

  return root
};

function getMaxVal(root) {
  while (root.right) {
    root = root.right
  }
  return root
}