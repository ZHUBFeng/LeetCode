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
  if (!head) {
    return head
  }

  var p = head
  var q = new ListNode()
  q.next = head

  var dummy = q
  while (p.next) {
    var equal = false
    while (p.next && p.val == p.next.val) {
      equal = true
      p.next = p.next.next
    }
    if (equal) {
      q.next = p.next
      if (q.next) { p = q.next }
    } else {
      p = p.next
      q = q.next
    }
  }

  return dummy.next
};