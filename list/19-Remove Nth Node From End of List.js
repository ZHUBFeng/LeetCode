/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */

 
var removeNthFromEnd = function(head, n){
  var fast = head
  var slow = new ListNode()
  slow.next = head
  
  var result = slow
  
  while(n--){
      fast = fast.next
  }
  
  while(fast){
      slow = slow.next
      fast = fast.next
  }
  
  slow.next = slow.next.next
  
  return result.next
}

// var removeNthFromEnd = function(head, n) {
//     if(!head){
//         return head
//     }
  
//     var deleted = false
//     var c = 0
  
//     traverse(head)
  
//     if(deleted){
//         return head
//     }else{
//         return head.next
//     }
  
//     function traverse(head){
//         if(head){
//             traverse(head.next)
//             c++
//             if(c == n + 1){
//                 deleted = true
//                 head.next = head.next.next
//             }
//         }
//     }
// };