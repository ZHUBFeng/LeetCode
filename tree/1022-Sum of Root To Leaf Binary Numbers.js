/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumRootToLeaf = function (root) {
  var sum = 0
  var str = []

  traverse(root)
  return sum

  function traverse(root) {
    if (!root) {
      return
    }

    str.push(root.val)

    if (!root.left && !root.right) {
      sum += parseInt(str.join(''), 2)
    } else {
      traverse(root.left)
      traverse(root.right)
    }

    str.pop()
  }
};