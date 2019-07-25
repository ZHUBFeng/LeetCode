var minDiffInBST = function (root) {
  var min = Infinity
  var prev = null

  inorder(root)
  return min

  function inorder(root) {
    if (!root) {
      return min
    }

    inorder(root.left)

    if (prev) {
      min = Math.min(min, Math.abs(root.val - prev.val))
    }

    prev = root
    
    inorder(root.right)
  }
};