/*
 * @lc app=leetcode.cn id=69 lang=javascript
 *
 * [69] x 的平方根
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
/**
 * x的平方根,核心是在找最接近平方根的数
 * 二分法可以通过快速在2~x/2直接找出那个(最接近的)数字
 * 重点1: 2以下时,平方根是自己,所以可以从2开始找
 * 重点2: mid*mid 约等于 x
 */
var mySqrt = function (x) {
  // x小于2时, 平方根为自己
  if (x < 2) return x;
  let left = 2,
    mid,
    right = Math.floor(x / 2);
  while (left <= right) {
    mid = Math.floor(left + (right - left) / 2);
    if (mid * mid === x) {
      return mid;
    }
    if (mid * mid < x) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return right;
};
// @lc code=end
