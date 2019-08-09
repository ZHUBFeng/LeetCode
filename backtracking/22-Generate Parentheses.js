/**
 * @param {number} n
 * @return {string[]}
 */

var generateParenthesis = function (n) {
  var result = []
  helper(0, 0, '')
  return result

  function helper(l, r, p) {
    if (r === n) {
      result.push(p)
    }

    if (l < n) {
      helper(l + 1, r, p + '(')
    }

    if (r < l) {
      helper(l, r + 1, p + ')')
    }
  }
};