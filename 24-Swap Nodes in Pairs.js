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
var swapPairs = function(head){
  if(!head || !head.next){
      return head
  }
  
  var a = head 
  var b = a.next
  var c = b.next
  
  b.next = a
  a.next = swapPairs(c)
  return b
  
}


// var swapPairs = function(head) {
//   var temp = head
  
//   while(temp && temp.next){
//       var k = temp.value
//       temp.value = temp.next.value
//       temp.next.value = k
      
//       temp = temp.next.next
//   }
  
//   return head
// };

// var swapPairs = function(head) {
//     if(!head){
//         return head
//     }
//     if(!head.next){
//         return head
//     }
//     var dummy = new ListNode()
//     var prev = dummy
  
//     while(head && head.next){
//         prev.next = head.next
//         head.next = head.next.next
//         prev.next.next = head
      
//         prev = prev.next.next
//         head = prev.next
//     }
//     return dummy.next
// };