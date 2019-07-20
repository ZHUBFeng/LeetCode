/**
 * @param {number} label
 * @return {number[]}
 */

 
var pathInZigZagTree = function (label) {
  var result = [];
  var levels = 1;
  var num = 2;
  while (num <= label) {
    levels++;
    num *= 2;
  }

  // step back to previous level
  var to = num - 1;
  var from = num >> 1; // divide by 2
  var pos;

  while (levels--) {
    result.unshift(label);

    pos = (label - from) >> 1; // find position on previous level
    to = from - 1;
    from >>= 1;

    label = to - pos;
  }

  return result;
};

// var pathInZigZagTree = function(label) {
//     var line = Math.ceil(Math.log2(label + 1))
//     var res = []
//     findFarther(label, line)

//     return res

//     function findFarther(label, line) {
//         if(line == 0) {
//             return 
//         }
//         res.unshift(label)
//         var small = Math.pow(2, line - 1)
//         var big = Math.pow(2, line) - 1

//         if(line % 2 == 0) {
//             var pos = big - label
//             var posFarther = Math.floor(pos / 2)
//             label = Math.pow(2, line - 2) + posFarther
//         }else{
//             pos = label - small
//             posFarther = Math.floor(pos / 2)
//             label = Math.pow(2, line - 1) - 1 - posFarther
//         }
//         findFarther(label, line - 1)
//     }
// };