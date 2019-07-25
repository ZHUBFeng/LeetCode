/**
 * @param {TreeNode} root
 * @return {number[]}
 */

var findMode = function (root) {
  var map = {}
  var res = []
  var max = -Infinity

  inorder(root, it => {
    if (it in map) {
      map[it]++
    } else {
      map[it] = 1
    }
  })

  var keys = Object.keys(map)

  for (var key of keys) {
    if (map[key] > max) {
      max = map[key]
      res = []
      res.push(key)
    } else if (map[key] == max) {
      res.push(key)
    }
  }

  return res
};

function inorder(root, action) {
  if (root) {
    inorder(root.left, action)
    action(root.val)
    inorder(root.right, action)
  }
}