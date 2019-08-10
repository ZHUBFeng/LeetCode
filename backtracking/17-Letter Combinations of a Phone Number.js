/**
 * @param {string} digits
 * @return {string[]}
 */

 //笛卡尔积法
var letterCombinations = function (digits) {
  var map = {
    2: ['a', 'b', 'c'],
    3: ['d', 'e', 'f'],
    4: ['g', 'h', 'i'],
    5: ['j', 'k', 'l'],
    6: ['m', 'n', 'o'],
    7: ['p', 'q', 'r', 's'],
    8: ['t', 'u', 'v'],
    9: ['w', 'x', 'y', 'z'],
  }
  if (digits.length == 1) {
    return map[digits[0]]
  }
  if (digits.length == 0) {
    return []
  }

  var res = map[digits[0]]

  for (var i = 1; i < digits.length; i++) {
    var n = map[digits[i]]
    res = combine(res, n)
  }

  return res
};

function combine(a1, a2) {
  var res = []
  for (var i = 0; i < a1.length; i++) {
    for (var j = 0; j < a2.length; j++) {
      res.push(a1[i] + a2[j])
    }
  }
  return res
}