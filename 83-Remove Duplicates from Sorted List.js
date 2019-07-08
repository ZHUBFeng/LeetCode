/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
  var current = head

  while (current && current.next != null) {
    if (current.val == current.next.val) {
      current.next = current.next.next
    } else {
      current = current.next
    }
  }

  return head
};

var deleteDuplicates = function (head) {
  var map = {}
  var dummy = new ListNode()
  var list = dummy

  while (head) {
    if (!(head.val in map)) {
      map[head.val] = 1
      list.next = head
      list = list.next
    }

    head = head.next
  }
  list.next = head

  return dummy.next
};