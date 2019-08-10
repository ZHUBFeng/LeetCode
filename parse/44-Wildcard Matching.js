/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function (s, p) {
  if (p.length == 0 && s.length == 0) {
    return 1
  }
  if (p.length == 0) {
    return 0
  }
  
  var c1 = new Array(s.length + 1).fill(0)
  c1[0] = 1

  var c2 = new Array(s.length + 1)

  for (var i = 0; i < p.length; i++) {

    if (p[i] == '*') {
      var idx = c1.indexOf(1)
      c2.fill(0)
      if (idx == -1) {
        c1 = c2.slice()
        continue
      }

      for (var m = idx; m < c2.length; m++) {
        c2[m] = 1
      }

    } else {
      c2[0] = 0

      for (var j = 1; j <= s.length; j++) {
        if (p[i] == s[j - 1] || p[i] == '?') {
          c2[j] = c1[j - 1]
        } else {
          c2[j] = 0
        }
      }
    }

    c1 = c2.slice()
  }

  return c2[c2.length - 1]
};