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

console.log(uniquePaths(3, 4))
