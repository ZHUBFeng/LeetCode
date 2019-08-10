/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function (s) {
  var stack = []

  for (var i = 0; i < s.length; i++) {
    if (s[i] == ']') {
      var str = ''
      var count = ''

      while (stack[stack.length - 1] != '[' && stack[stack.length - 1] != ']') {
        str = stack.pop() + str
      }
      stack.pop() // pop '[' || ']'

      while (stack[stack.length - 1] >= 0) {
        count = stack.pop() + count
      }

      str = str.repeat(count)
      stack.push(str)
    } else {
      stack.push(s[i])
    }
  }

  return stack.join('')
}          