var levelOrder = function (root, depth = 0, res = []) {
  if (!root) {
    return []
  }

  res[depth] = res[depth] || []
  res[depth].push(root.val)

  if (root.children.length != 0) {
    root.children.forEach(item => {
      levelOrder(item, depth + 1, res)
    })
  }

  return res
}

// var levelOrder = function(root) {
//     if(!root){
//         return []
//     }

//     var res = []
//     var nodes = [root]
//     while(nodes.length){
//         var a = nodes.length
//         var row = []
//         for(var i = 0; i < a; i++){
//             var node = nodes.shift()
//             if(node){
//                 row.push(node.val)
//                 nodes.push(...node.children)
//             }
//         }
//         res.push(row)
//     }
//     return res

// };