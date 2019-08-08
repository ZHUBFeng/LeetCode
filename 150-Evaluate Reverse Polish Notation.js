/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
  var stack = []

  for (var i = 0; i < tokens.length; i++) {
    var c
    if (tokens[i] !== '+' && tokens[i] !== '-' && tokens[i] !== '*' && tokens[i] !== '/') {
      stack.push(tokens[i])
    } else {
      var a = Number(stack.pop())
      var b = Number(stack.pop())

      if (tokens[i] == '+') {
        c = b + a
      } else if (tokens[i] == '-') {
        c = b - a
      } else if (tokens[i] == '*') {
        c = b * a
      } else if (tokens[i] == '/') {
        c = b / a
        c = c > 0 ? Math.floor(c) : Math.ceil(c)
      }
      if (c !== undefined) {
        stack.push(c)
      }
    }
  }
  return stack[0]
};