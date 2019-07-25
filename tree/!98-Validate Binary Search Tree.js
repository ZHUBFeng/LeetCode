/**
 * @param {TreeNode} root
 * @return {boolean}
 */

//法一 利用中序遍历 后一个节点一个大于前一个节点
var isValidBST = function (root) {
  var pre = null
  return inorder(root)

  function inorder(root) {
    if (!root) {
      return true
    }
    if (!inorder(root.left)) {
      return false
    }
    if (pre && root.val <= pre.val) {
      return false
    }

    pre = root

    return inorder(root.right)
  }
}



//法二 递归 判断每个节点的值是否在正确的范围内
var isValidBST = function (root) {

  return helper(root, null, null)

  function helper(root, min, max) {
    if (!root) {
      return true
    }

    if (min !== null && root.val >= min || max !== null && root.val <= max) {
      return false
    }

    return helper(root.left, root.val, max) && helper(root.right, min, root.val)
  }
}

//法三 找到每棵树的最大最小值
var isValidBST = function (root) {
  if (!root) {
    return true
  }
  var min
  var max
  var nodes = [root]

  while (nodes.length) {
    var node = nodes.shift()
    if (node.left) {
      nodes.push(node.left)
      max = node.left.val
      max = findMax(node.left, max)
      if (node.val <= max) {
        return false
      }
    }
    if (node.right) {
      nodes.push(node.right)
      min = node.right.val
      min = findMin(node.right, min)
      if (node.val >= min) {
        return false
      }
    }
  }

  return true

  function findMin(root, min) {
    if (!root) {
      return min
    }
    if (root.val < min) {
      min = root.val
    }
    return Math.min(min, findMin(root.left, min), findMin(root.right, min))
  }

  function findMax(root, max) {
    if (!root) {
      return max
    }
    if (root.val > max) {
      max = root.val
    }
    return Math.max(max, findMax(root.left, max), findMax(root.right, max))
  }
};
