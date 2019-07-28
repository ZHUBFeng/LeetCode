/**
 * @param {TreeNode} root
 * @return {number}
 */
//每个节点服从 root.val = Math.min(root.right.val, root.left.val)
var findSecondMinimumValue = function (root) {
  var min = root.val
  var ans = Infinity
  dfs(root)

  return ans < Infinity ? ans : -1

  function dfs(root) {
    if (root) {
      if (min < root.val && root.val < ans) {
        ans = root.val
      } else if (min == root.val) {
        dfs(root.left)
        dfs(root.right)
      }
    }
  }
}

// var findSecondMinimumValue = function(root) {
//     var first = root.val
//     var second = -1

//     var nodes = [root]

//     while(nodes.length) {
//         var node = nodes.shift()
//         if(node) {
//             if(node.val < first) {
//                 first = node.val
//                 second = first
//             }else if(node.val > first && (node.val < second || second == -1)) {
//                 second = node.val
//             }
//             nodes.push(node.left, node.right)
//         }
//     }

//     return second
// };