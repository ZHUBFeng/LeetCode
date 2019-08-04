/**
 * @param {number} n
 * @return {string[][]}
 */

// 2n - 1条对角线
// 左上角到右下角(0 - 14(n = 8)) diag = x + y 
// 左下角到右上角(0 - 14) diag = (x - y) + n - 1

var solveNQueens = function (n) {
  var result = []
  var board = new Array(n)
  for (var i = 0; i < n; i++) {
    board[i] = new Array(n).fill('.')
  }
  var cols = new Array(n).fill(0) //0可以放 1不可以放
  var diag1 = new Array(2 * n - 1).fill(0)
  var diag2 = new Array(2 * n - 1).fill(0)

  helper(board, 0)
  return result

  function helper(board, x) { //从第x行开始放
    if (x == n) {
      result.push([...board.map(it => it.join(''))])
      return
    }

    for (var i = 0; i < n; i++) {
      if (available(x, i)) {
        put(x, i, true)
        helper(board, x + 1)
        put(x, i, false)
      }
    }
  }

  function available(x, y) {
    return !cols[y] && board[x][y] != 'Q' && !diag1[x + y] && !diag2[x - y + n - 1]
  }
  function put(x, y, isput) {
    board[x][y] = isput ? 'Q' : '.'
    cols[y] = isput
    diag1[x + y] = isput
    diag2[x - y + n - 1] = isput
  }
};