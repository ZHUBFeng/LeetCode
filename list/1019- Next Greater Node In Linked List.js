/**
 * @param {ListNode} head
 * @return {number[]}
 */

var nextLargerNodes = function (head) {
  let ar = new Array();
  while (head) {
    ar.push(head.val);
    head = head.next;
  }

  let res = new Array(ar.length).fill(0);
  let stk = new Array();

  for (let i = 0; i < ar.length; i++) {
    while ((stk.length > 0) && (ar[stk[stk.length - 1]] < ar[i])) {
      var idx = stk.pop()
      res[idx] = ar[i]
    }
    stk.push(i);
  }
  return res;

};


// var nextLargerNodes = function(head) {
//     var nums = []

//     while(head) {
//         var dummy = head
//         var base = dummy.val

//         while(dummy.next) {
//             if(base < dummy.next.val) {
//                 nums.push(dummy.next.val)
//                 break
//             }
//             dummy = dummy.next
//         }

//         head = head.next

//         if(!dummy.next) {
//             nums.push(0)
//         }
//     }

//     return nums
// };