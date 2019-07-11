var isSameTree = function (p, q) {
  if (!p && !q) {
    return true
  }
  if (!p || !q) {
    return false
  }
  if (p.val != q.val) {
    return false
  }

  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right)
}


// var isSameTree = function(p, q) {
//     var str1 = lctree2ary(p)
//     var str2 = lctree2ary(q)

//     if(str1.length != str2.length){
//         return false
//     }
//     for(var i = 0; i < str1.length; i++){
//         if(str1[i] !== str2[i]){
//             return false
//         }
//     }
//     return true
// };


// function lctree2ary(root){
// 	if(root){
// 		var nodes = [root]
// 		var ary = []

// 		while(nodes.length){
// 			var node = nodes.shift()

// 			if(node){
// 				ary.push(node.val)
// 				nodes.push(node.left, node.right)
// 			}else{
// 				ary.push(null)
// 			}
// 		}

// 		while(ary[ary.length - 1] == null){
// 			ary.pop()
// 		}

// 		return ary
// 	}

// 	return []
// }