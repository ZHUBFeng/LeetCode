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

//与236方法类似 函数的返回值有两种类型
// 如果root是平衡的，返回其深度
// 如果root不是平衡的，返回-1
var isBalanced = function (root) {

  return balanced(root) >= 0

  function balanced(root) {
    if (!root) {
      return 0
    }

    var dl = balanced(root.left)
    if (dl == -1) {
      return -1
    }

    var dr = balanced(root.right)
    if (dr == -1) {
      return -1
    }

    if (Math.abs(dl - dr) <= 1) {
      return Math.max(dl, dr) + 1
    } else {
      return -1
    }
  }
}

//
var isBalanced = function (root) {

  try {
    balanced(root)
    return true
  } catch (e) {
    return false
  }

  function balanced(root) {
    if (!root) {
      return 0
    }

    var left = balanced(root.left)
    var right = balanced(root.right)

    if (Math.abs(left - right) <= 1) {
      return Math.max(left, right) + 1
    } else {
      throw e
    }
  }
}


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