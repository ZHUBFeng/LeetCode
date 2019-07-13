/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} pre
 * @param {number[]} post
 * @return {TreeNode}
 */

var constructFromPrePost = function (pre, post) {
  var root = new TreeNode(pre[0])

  if (pre.length == 0) {
    return null
  }
  if (pre.length == 1) {
    return root
  }

  var num1 = []
  var num2 = []
  var i = 1, j = 0

  while (true) {
    num1.push(pre[i++])
    num2.push(post[j++])

    var flag = false
    for (var m = 0; m < num1.length; m++) {
      if (num2.indexOf(num1[m]) == -1) {
        flag = true
        break
      }
    }
    if (!flag) {
      break
    }
  }

  if (pre.length == 2) {
    root.left = new TreeNode(post[0])
  } else {
    var preL = pre.slice(1, i)
    var postL = post.slice(0, j)

    var preR = pre.slice(i)
    var postR = post.slice(j, post.length - 1)

    root.left = constructFromPrePost(preL, postL)
    root.right = constructFromPrePost(preR, postR)
  }

  return root
};