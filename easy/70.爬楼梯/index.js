/*
 * @lc app=leetcode.cn id=70 lang=javascript
 *
 * [70] 爬楼梯
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
/**
 * 斐波那契数列
 * 11235
 * 规律是后一个数字等于前两个数字之和
 */
var climbStairs = function (n) {
  // 斐波那契数列
  let a = (b = 1);
  let sum;
  for (let i = 0; i < n - 1; i++) {
    sum = a + b;
    a = b;
    b = sum;
  }
  // n为1的情况
  return sum ? sum : n;
};
// @lc code=end
