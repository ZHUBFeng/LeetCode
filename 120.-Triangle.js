//从下往上加
var minimumTotal = function(triangle) {
  for(var i = triangle.length - 2; i >= 0; i--){
      for(var j = 0; j < triangle[i].length; j++){
          triangle[i][j] += Math.min(triangle[i + 1][j] , triangle[i + 1][j + 1])
      }
  }
  return triangle[0][0]
};

//递归
// var minimumTotal = function(triangle) {
//     var map = {}
//     return minCollect(0,0)
  
//     function minCollect(row,col){
//         var key = row + ',' + col
//         if(key in map){
//             return map[key]
//         }
//         if(row == triangle.length - 1){
//             return triangle[row][col]
//         }
      
//         map[key] = triangle[row][col] + Math.min(minCollect(row + 1,col) , minCollect(row + 1,col + 1))
//         return map[key]
//     }
// };