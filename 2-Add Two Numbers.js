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

 
var addTwoNumbers = function(l1, l2) {
  var dummy = new ListNode()
  var head = dummy
  var c = 0
  
  while(l1 || l2){
      if(!l1){
          l1 = new ListNode()
          l1.val = 0
      }
      if(!l2){
          l2 = new ListNode()
          l2.val = 0
      }
      
      var digit = (l1.val + l2.val + c) % 10
      
      head.val = digit
      
      c = Math.floor((l1.val + l2.val + c) / 10)
      
      l1 = l1.next
      l2 = l2.next
      
      if(l1 || l2 || c != 0){
          head.next = new ListNode()
      }
      
      head = head.next
  }
  
  if(c != 0){
      head.val = c
  }
  return dummy
};