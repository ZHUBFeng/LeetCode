
var delNodes = function (root, to_delete) {
  const delSet = to_delete.reduce((obj, item) => { obj[item] = item; return obj; }, {});
  const result = [];
  deleteNodes(root);
  return result;

  function deleteNodes(root, parent) {
    if (!root) return null;
    var current = delSet[root.val] ? null : root;
    if (!parent && current) result.push(current);
    root.left = deleteNodes(root.left, current);
    root.right = deleteNodes(root.right, current);
    return current;
  };
};