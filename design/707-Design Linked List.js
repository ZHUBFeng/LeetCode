/**
 * Initialize your data structure here.
 */
var MyLinkedList = function () {
  this.head = null
  this.tail = null
  this.size = 0
};

/**
* Get the value of the index-th node in the linked list. If the index is invalid, return -1. 
* @param {number} index
* @return {number}
*/
MyLinkedList.prototype.get = function (index) {
  if (this.size > 0 && index < this.size && index >= 0) {
    var i = 0
    var dummy = this.head
    while (i != index) {
      dummy = dummy.next
      i++
    }
    return dummy.val
  } else {
    return -1
  }
};

/**
* Add a node of value val before the first element of the linked list. After the insertion, the new node will be the first node of the linked list. 
* @param {number} val
* @return {void}
*/
MyLinkedList.prototype.addAtHead = function (val) {
  this.size += 1
  var node = {
    val: val,
    next: null
  }
  if (this.head == null) {
    this.head = node
  } else {
    node.next = this.head
    this.head = node
  }

  if (this.tail == null) {
    this.tail = node
  }
};

/**
* Append a node of value val to the last element of the linked list. 
* @param {number} val
* @return {void}
*/
MyLinkedList.prototype.addAtTail = function (val) {
  this.size += 1
  var node = {
    val: val,
    next: null
  }
  if (this.tail == null) {
    this.tail = node
  } else {
    this.tail.next = node
    this.tail = node
  }
  if (this.head == null) {
    this.head = node
  }
};

/**
* Add a node of value val before the index-th node in the linked list. If index equals to the length of linked list, the node will be appended to the end of linked list. If index is greater than the length, the node will not be inserted. 
* @param {number} index 
* @param {number} val
* @return {void}
*/
MyLinkedList.prototype.addAtIndex = function (index, val) {

  var node = {
    val: val,
    next: null
  }
  if (index <= 0) {
    this.addAtHead(val)
  } else if (index > 0 && index < this.size) {
    this.size += 1
    var i = 0
    var dummy = this.head

    while (i != index - 1) {
      dummy = dummy.next
      i++
    }
    node.next = dummy.next
    dummy.next = node
  } else if (index == this.size) {
    this.addAtTail(val)
  }
};

/**
* Delete the index-th node in the linked list, if the index is valid. 
* @param {number} index
* @return {void}
*/
MyLinkedList.prototype.deleteAtIndex = function (index) {
  if (index >= 0 && index < this.size) {
    this.size -= 1
    if (index == 0) {
      this.head = this.head.next
    } else {
      var dummy = this.head
      var i = 0
      while (i != index - 1) {
        dummy = dummy.next
        i++
      }
      dummy.next = dummy.next.next
      if (i == this.size - 1) {
        this.tail = dummy
      }
    }

    if (this.head == null) {
      this.head = this.tail
    }
    if (this.tail == null) {
      this.tail = this.head
    }
  }
};

/**
* Your MyLinkedList object will be instantiated and called as such:
* var obj = new MyLinkedList()
* var param_1 = obj.get(index)
* obj.addAtHead(val)
* obj.addAtTail(val)
* obj.addAtIndex(index,val)
* obj.deleteAtIndex(index)
*/