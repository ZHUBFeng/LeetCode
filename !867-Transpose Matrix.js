/**
 * 转置矩阵
 * @param {number[][]} A
 * @return {number[][]}
 */
var transpose = function (A) {
  return A[0].map((_, idx) => {
    return A.map(ele => ele = ele[idx])
  })
};