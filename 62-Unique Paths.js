/** 
走最短路径，每一步只能向右方或者下方走。
所以经过每一个格子路径数只可能源自左方或上方，得到了动态规划的递推式，
用一个二维数组dp储存每个格子的路径数，则dp[i][j]=dp[i-1][j]+dp[i][j-1]。
最左边和最上边的路径数都固定为1，代表一直沿着最边缘走的路径
**/

var uniquePaths = function (m, n) {
  var dp = new Array(m)
  for (var i = 0; i < m; i++) {
    dp[i] = new Array(n)
  }

  for (var i = 0; i < m; i++) {
    dp[i][0] = 1
  }

  for (var j = 0; j < n; j++) {
    dp[0][j] = 1
  }

  for (var i = 1; i < m; i++) {
    for (var j = 1; j < n; j++) {
      dp[i][j] = dp[i - 1][j] + dp[i][j - 1]
    }
  }

  return dp[m - 1][n - 1]
};

/**
 用一维数组表示
 每个元素更新前的值都是其在二维数组中对应列的上一行的值。
 dp[j] = dp[j - 1] + dp[j];
 */
var uniquePaths = function(m, n) {
  var dp =new Array(m).fill(1)
  for(var i = 0; i < n - 1; i++){
      for(var j = 0; j < m; j++){
          dp[j] = j == 0 ? 1 : dp[j - 1] + dp[j]
      }
  }
  return dp[m - 1]
}


//递归
var uniquePaths = function (m, n) {
  var result = 0

  function findPath(start_m, start_n) {
    if (start_m == m && start_n == n) {
      return result++
    } else if (start_m <= m && start_n <= n) {
      findPath(start_m + 1, start_n)
      findPath(start_m, start_n + 1)
    }
  }
  findPath(1, 1)
  return result
};

