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

var parseBoolExpr = function (exp) {
  var i = 0
  return parseVal()

  function parseVal() {
    if (exp[i] == 't') {
      i++
      return true
    }
    if (exp[i] == 'f') {
      i++
      return false
    }
    if (exp[i] == '!') {
      return !parseNot()
    }
    if (exp[i] == '|') {
      return parseOr()
    }
    if (exp[i] == '&') {
      return parseAnd()
    }
  }

  function parseNot() {
    i += 2
    var value = parseVal()
    i++
    return value
  }
  
  function parseAnd() {
    i += 2
    var res = true
    while (true) {
      var r = parseVal()
      res = res && r
      if (exp[i] == ',') {
        i++
      }
      if (exp[i] == ')') {
        i++
        return res
      }
    }
  }

  function parseOr() {
    i += 2
    res = false
    while (true) {
      r = parseVal()
      res = res || r

      if (exp[i] == ',') {
        i++
      }
      if (exp[i] == ')') {
        i++
        return res
      }
    }
  }

}
