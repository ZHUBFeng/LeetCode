/**
 * @param {string} expression
 * @return {boolean}
 */

var parseBoolExpr = function (expression) {
  var j = 0
  return helper(expression)

  function helper(expression) {
    for (; j < expression.length; j++) {

      if (expression[j] == '!') {
        j += 2
        res = !helper(expression)
        j++
        return res
      }

      if (expression[j] == '|') {
        j += 2
        var res = false
        for (; j < expression.length; j++) {
          if (expression[j] == ',') {
            j++
          }
          if (expression[j] == ')') {
            break
          }
          var r = helper(expression)
          res = res || r
        }
        return res
      }

      if (expression[j] == '&') {
        j += 2
        res = true
        for (; j < expression.length; j++) {
          if (expression[j] == ',') {
            j++
          }
          if (expression[j] == ')') {
            break
          }
          r = helper(expression)
          res = res && r
        }
        return res
      }

      if (expression[j] == 'f') {
        return false
      }
      if (expression[j] == 't') {
        return true
      }
    }
    return res
  }
};

