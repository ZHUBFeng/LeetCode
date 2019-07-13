//对称的树镜像对称 递归
var isSymmetric = function (root) {
  return isMirror(root, root)
}

function isMirror(t1, t2) {
  if (!t1 && !t2) {
    return true
  }
  if (!t1 || !t2) {
    return false
  }
  if (t1.val != t2.val) {
    return false
  }
  return isMirror(t1.left, t2.right) && isMirror(t1.right, t2.left)
}

//有重复比较
var isSymmetric = function (root) {
  var nodes1 = [root]
  var nodes2 = [root]

  while (nodes1.length || nodes2.length) {
    var node1 = nodes1.pop()
    var node2 = nodes2.pop()

    if (node1 && node2) {
      if (node1.val != node2.val) {
        return false
      }

      //var nodes1 = [root, root]
      //nodes1.push(node1.left, node2.right, node1.right, node2.left)
      nodes1.push(node1.left, node1.right)
      nodes2.push(node2.right, node2.left)
    }

    if (node1 && !node2 || !node1 && node2) {
      return false
    }
  }
  return true
};