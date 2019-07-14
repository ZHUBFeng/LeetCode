/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function (root) {
  if (!root) {
    return '[]'
  }
  var str = '['
  return relSerialize(root)

  function relSerialize(root) {

    var nodes = [root]

    while (nodes.length) {
      var node = nodes.shift()
      if (node) {
        str += node.val + ','
        nodes.push(node.left, node.right)
      } else {
        str += 'null' + ','
      }
    }
    var s = str.split(',')
    var i = s.length - 1
    while (s[i] == 'null' || s[i] == '') {
      s.pop()
      i--
    }
    str = s.join(',')
    return str + ']'
  }
};

/**
* Decodes your encoded data to tree.
*
* @param {string} data
* @return {TreeNode}
*/
var deserialize = function (data) {
  if (data.length == 2) {
    return null
  }

  data = data.slice(1, data.length - 1)
  data = data.split(',')
  var root = new TreeNode(Number(data[0]))
  var i = 1
  var nodes = [root]

  while (i != data.length) {
    var node = nodes.shift()
    if (data[i] != 'null') {
      node.left = new TreeNode(Number(data[i]))
      nodes.push(node.left)
    } else {
      node.left = null
    }

    i++
    if (i == data.length) {
      break
    }

    if (data[i] != 'null') {
      node.right = new TreeNode(Number(data[i]))
      nodes.push(node.right)
    } else {
      node.right = null
    }
    i++
  }
  return root
};

/**
* Your functions will be called as such:
* deserialize(serialize(root));
*/