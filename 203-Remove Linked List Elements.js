function removeElements(H, target){
  if(!H) return head;
  if(H.val === target) return removeElements(H.next, target);
  
  H.next = removeElements(H.next, target);
  return H;
}

// var removeElements = function(head, val) {
//     var dummy = new ListNode()
//     dummy.next = head
  
//     var list = dummy
  
//     while(dummy.next){
//         if(dummy.next.val == val){
//             dummy.next = dummy.next.next
//         }else{
//             dummy = dummy.next
//         }
//     }
//     return list.next
  
// };
