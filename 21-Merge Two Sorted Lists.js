/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
// 递归
var mergeTwoLists = function (l1, l2) {
  if (!l1 || !l2) return l1 || l2
  if (l1.val < l2.val) {
    l1.next = mergeTwoLists(l1.next, l2)
    return l1
  }
  l2.next = mergeTwoLists(l1, l2.next)
  return l2
};


var mergeTwoLists = function (l1, l2) {
  var dummy = new ListNode()
  var head = dummy

  while (!l1 && !l2) {
    return dummy.next
  }

  while (l1 && l2) {
    if ((l1.val < l2.val) && (!l1.next || l1.val <= l1.next.val)) {
      var k = l1.val
      l1 = l1.next
    } else {
      k = l2.val
      l2 = l2.next
    }

    head.val = k
    head.next = l1 == null && l2 == null ? null : new ListNode()
    head = head.next
  }

  if (l1) {
    var l = l1
  } else if (l2) {
    l = l2
  }

  while (l) {
    head.val = l.val
    l = l.next
    head.next = l != null ? new ListNode() : null
    head = head.next
  }

  return dummy
};