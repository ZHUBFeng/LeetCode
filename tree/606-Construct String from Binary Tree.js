
var tree2str = function (t) {
  if (!t) {
    return ''
  }

  if (t.left && t.right) {
    return t.val + '(' + tree2str(t.left) + ')' + '(' + tree2str(t.right) + ')'
  }
  if (t.left) {
    return t.val + '(' + tree2str(t.left) + ')'
  }
  if (t.right) {
    return t.val + '()' + '(' + tree2str(t.right) + ')'
  }
  if (!t.left && !t.right) {
    return t.val.toString()
  }

};