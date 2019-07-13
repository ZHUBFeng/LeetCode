var levelOrder = function (root) {
  if (!root) {
    return []
  }
  var arys = []
  var nodes = [root]

  while (nodes.length) {
    var l = nodes.length
    var ary = []

    for (var i = 0; i < l; i++) {
      var node = nodes.shift()
      ary.push(node.val)

      if (node.left) {
        nodes.push(node.left)
      }
      if (node.right) {
        nodes.push(node.right)
      }
    }//一次for循环 其实添加进去了一行的子节点

    arys.push(ary)
  }
  return arys
}

//不通过 

// var levelOrder = function(root) {
//     if(!root){
//         return []
//     }

//     var arys = []
//     var nodes = [root]
//     var c = 1
//     var i = 0
//     var ary = []

//     while(true){
//         var node = nodes.shift()
//         if(!node.left){
//             nodes.push(new TreeNode(null))
//         }
//         if(!node.right){
//             nodes.push(new TreeNode(null))
//         }
//         if(node.left){
//             nodes.push(node.left)
//         }
//         if(node.right){
//             nodes.push(node.right)
//         }

//         if(c >= Math.pow(2, i) && c < Math.pow(2, i + 1)){
//             if(node.val != null){
//                 ary.push(node.val)
//             }
//             c++

//             if(c == Math.pow(2, i + 1)){
//                 i++
//                 arys.push(ary)
//                 ary = []

//             }
//         }

//         for(var j = 0; j < nodes.length; j++){
//             if(nodes[j].val != null){
//                 break
//             }
//         }

//         if(j == nodes.length){
//             if(ary.length)  {arys.push(ary)}
//             return arys
//         }
//     }
// };
