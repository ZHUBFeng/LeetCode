/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 */

 //法一
var BSTIterator = function (root) {
  this.stack = []
  var p = root

  while (p) {
    this.stack.push(p)
    p = p.left
  }
};

/**
* @return the next smallest number
* @return {number}
*/
BSTIterator.prototype.next = function () {
  var node = this.stack.pop()
  p = node.right

  while (p) {
    this.stack.push(p)
    p = p.left
  }

  return node.val
};

/**
* @return whether we have a next smallest number
* @return {boolean}
*/
BSTIterator.prototype.hasNext = function () {
  return this.stack.length > 0
};

/**
* Your BSTIterator object will be instantiated and called as such:
* var obj = new BSTIterator(root)
* var param_1 = obj.next()
* var param_2 = obj.hasNext()
*/


//法二 运用生成器
var BSTIterator = function (root) {
  this.generator = traverse(root)
  this.generated = this.generator.next()

  function* traverse(root) {
    if (root) {
      yield* traverse(root.left)
      yield root.val
      yield* traverse(root.right)
    }
  }

};

/**
* @return the next smallest number
* @return {number}
*/
BSTIterator.prototype.next = function () {
  var value = this.generated.value
  this.generated = this.generator.next()
  return value
};

/**
* @return whether we have a next smallest number
* @return {boolean}
*/
BSTIterator.prototype.hasNext = function () {
  return !this.generated.done
};
