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

var parseBoolExpr = function (expression) {
  var j = 0
  return helper(expression)

  function helper(expression) {
    for (; j < expression.length; j++) {

      if (expression[j] == '!') {
        j += 2
        var res = !helper(expression)
        j++
        return res
      } else if (expression[j] == 'f') {
        return false
      } else if (expression[j] == 't') {
        return true
      } else if (expression[j] == '&' || expression[j] == '|') {
        if (expression[j] == '&') {
          var is_and = true
        } else {
          is_and = false
        }
        res = is_and
        j++

        for (; j < expression.length; j++) {
          if (expression[j] == ',') {
            j++
          }
          if (expression[j] == ')') {
            break
          }
          var r = helper(expression)

          if (is_and) {
            res = res && r
          } else {
            res = res || r
          }
        }
        return res
      }
    }
    return res
  }
};