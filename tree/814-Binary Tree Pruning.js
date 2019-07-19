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
//法1
var pruneTree = function (root) {
  helper(root)
  return root
}

function helper(root) {
  if (!root) {
    return false
  }
  var left = helper(root.left)
  var right = helper(root.right)

  if (!left) {
    root.left = null
  }
  if (!right) {
    root.right = null
  }
  return root.val === 1 || left || right
}

//法2
var pruneTree = function (root) {
  var dummy = new TreeNode()
  dummy.left = root

  return helper(dummy).left

  function helper(dummy) {
    if (!dummy) {
      return
    }
    if (!findOne(dummy.left)) {
      dummy.left = null
    }
    if (!findOne(dummy.right)) {
      dummy.right = null
    }

    helper(dummy.left)
    helper(dummy.right)

    return dummy
  }
};

function findOne(root) {
  var nodes = [root]

  while (nodes.length) {
    var node = nodes.shift()
    if (node) {
      if (node.val == 1) {
        return true
      }
      nodes.push(node.left, node.right)
    }
  }
  return false
}