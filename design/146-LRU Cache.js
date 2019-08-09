





/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
  this.capacity = capacity
  this.map = new Map()
  this.node = {
    key: null,
    val: null,
    next: null,
    pre: null,
  }
};

/** 
* @param {number} key
* @return {number}
*/
LRUCache.prototype.get = function (key) {
  if (this.map.has(key)) {
    if (this.node.key !== key) {
      var node1 = this.map.get(key)

      node1.pre.next = node1.next
      node1.next.pre = node1.pre

      this.node.next = node1
      node1.pre = this.node
      node1.next = null
      this.node = node1
    }

    return this.map.get(key).val
  }
  return -1
};

/** 
* @param {number} key 
* @param {number} value
* @return {void}
*/
LRUCache.prototype.put = function (key, value) {
  if (this.map.has(key)) {
    var node1 = this.map.get(key)

    if (node1.next) {
      node1.pre.next = node1.next
      node1.next.pre = node1.pre

      this.node.next = node1
      node1.pre = this.node
      node1.next = null
      this.node = node1
    }
    this.node.val = value
    this.map.set(key, this.node)
  } else {
    this.node.next = {
      key: key,
      val: value,
      next: null,
      pre: this.node,
    }

    if (this.map.size == this.capacity) {
      var node1 = this.node
      while (node1.pre.val) {
        node1 = node1.pre
      }
      this.map.delete(node1.key)
      node1.pre.next = node1.next
      node1.next.pre = node1.pre
    }
    this.node = this.node.next
    this.map.set(key, this.node)

  }
};

/**
* Your LRUCache object will be instantiated and called as such:
* var obj = new LRUCache(capacity)
* var param_1 = obj.get(key)
* obj.put(key,value)
*/