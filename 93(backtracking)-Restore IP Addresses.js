/**
 * @param {string} s
 * @return {string[]}
 */

function isIPPart(p) {
  if (p[0] === '0') {
    return p.length == 1
  }
  return +p < 256 && p.length
}

//法一
var restoreIpAddresses = function (s, parts = [], result = []) {

  if (parts.length == 3) {
    if (isIPPart(s)) {
      result.push(parts.join('.') + '.' + s)
    }
    return
  }

  for (var i = 1; i <= 3; i++) {
    var part = s.slice(0, i)
    if (isIPPart(part)) {
      parts.push(part)
      restoreIpAddresses(s.slice(i), parts, result)
      parts.pop()
    }
  }
  return result
}

//法二
var restoreIpAddresses = function (s) {
  var result = []

  for (var i = 1; i < 4; i++) {
    var part1 = s.slice(0, i)
    if (isIPPart(part1)) {
      for (var j = i + 1; j < i + 4; j++) {
        var part2 = s.slice(i, j)
        if (isIPPart(part2)) {
          for (var k = j + 1; k < j + 4; k++) {
            var part3 = s.slice(j, k)
            var part4 = s.slice(k)
            if (isIPPart(part3) && isIPPart(part4)) {
              result.push([part1, part2, part3, part4].join('.'))
            }
          }
        }
      }
    }
  }

  return result
};

