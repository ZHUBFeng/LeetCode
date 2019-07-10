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

// 递归 
// 先分两边排序 再合并
var sortList = function (head) {
  if (!head || !head.next) return head

  var slow = head
  var fast = head

  if (!head.next.next) {
    if (head.val > head.next.val) {
      head.next.next = head
      head = head.next
      head.next.next = null
    }
    return head
  }

  while (fast && fast.next) {
    slow = slow.next
    fast = fast.next.next
  }

  var right = slow.next
  slow.next = null

  head = sortList(head)
  right = sortList(right)

  return mergeTwoLists(head, right)

};

var mergeTwoLists = function (l1, l2) {
  if (!l1 || !l2) return l1 || l2

  if (l1.val < l2.val) {
    l1.next = mergeTwoLists(l1.next, l2)
    return l1
  }

  l2.next = mergeTwoLists(l1, l2.next)
  return l2
};