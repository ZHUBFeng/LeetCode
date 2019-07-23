/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */

var lcaDeepestLeaves = function (root) {
  var current = [root]
  var next = []
  var last

  while (current.length) {
    for (var i = 0; i < current.length; i++) {
      if (current[i].left) {
        current[i].left.parent = current[i]
        next.push(current[i].left)
      }
      if (current[i].right) {
        current[i].right.parent = current[i]
        next.push(current[i].right)
      }
    }
    last = current
    current = next
    next = []
  }

  var parent = last[0].parent
  if (!parent) {
    return last[0]
  }

  while (last.length > 1) {
    next = []
    for (var i = 0; i < last.length; i++) {
      var newParent = last[i].parent
      if (!next.includes(newParent)) {
        next.push(newParent)
      }
    }
    last = next
  }
  return last[0]
};