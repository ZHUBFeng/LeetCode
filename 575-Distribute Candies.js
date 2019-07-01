

var distributeCandies = function(candies) {
  const kinds = new Set(candies).size; //取得糖果类型数
  const halfLength = candies.length / 2; // 每个人能拿到的糖果数
  return Math.min(halfLength, kinds);
};