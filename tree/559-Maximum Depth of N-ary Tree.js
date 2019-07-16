var maxDepth = function (root) {
  if (!root) {
    return 0
  }

  var max = 0
  root.children.forEach(children => {
    max = Math.max(max, maxDepth(children))
  })

  return max + 1
};
