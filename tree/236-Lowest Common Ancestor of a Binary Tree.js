/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */

//与110方法类似 函数的返回值有两种类型
var lowestCommonAncestor = function (root, p, q) {
  return seen(root, p, q)
};

// 如果两个都看到了，返回这两个结点的最近公共祖先
// 如果不是，返回看到的数量
function seen(root, p, q) {
  if (!root) {
    return 0
  }
  if (!root.left && !root.right) {
    if (root.val == p.val || root.val == q.val) {
      return 1
    } else {
      return 0
    }
  }

  var lc = seen(root.left, p, q)
  if (typeof lc !== 'number') {
    return lc
  }

  var rc = seen(root.right, p, q)
  if (typeof rc !== 'number') {
    return rc
  }

  if (lc + rc == 2) {
    return root
  }

  if (root.val == q.val || root.val == p.val) {
    if (lc + rc + 1 == 2) {
      return root
    } else {
      return 1
    }
  }
  return lc || rc
}