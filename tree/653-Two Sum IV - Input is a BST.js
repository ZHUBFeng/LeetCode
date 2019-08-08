

var findTarget = function (root, k) {
  var map = {}

  return traverse(root)

  function traverse(root) {
    if (!root) {
      return false
    }

    var need = k - root.val
    if (need in map) {
      return true
    }
    map[root.val] = root.val

    return traverse(root.left) || traverse(root.right)
  }
};