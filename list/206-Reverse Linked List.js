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

 //  ***递归***
var reverseList = function (head) {

  if (!head || !head.next) {
    return head
  }

  var nh = reverseList(head.next)

  head.next.next = head
  head.next = null

  return nh
};


var reverseList = function (head) {
  var dummy = new ListNode()

  while (head) {
    dummy.val = head.val
    var list = new ListNode()
    list.next = dummy
    head = head.next
    dummy = list
  }

  return dummy.next

};