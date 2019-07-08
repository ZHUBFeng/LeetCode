var middleNode = function(head) {
    var slow = head
    var fast = head
    
    while(fast && fast.next){
        slow = slow.next
        fast = fast.next.next
    }
    
    return slow
};

// var middleNode = function(head) {
    
//     var size = listSize(head)
//     var mid = Math.floor(size / 2)
    
//     while(mid--){
//         head = head.next
//     }
    
//     return head
// };

// function listSize(list){
//     if(!list){
//         return 0
//     }
//     list = list.next
//     return 1 + listSize(list)
// }