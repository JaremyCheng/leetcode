/*
 * @lc app=leetcode.cn id=66 lang=javascript
 *
 * [66] 加一
 */

// @lc code=start
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  let mod = 1;
  const len = digits.length - 1;
  const newNum = [];
  for (let i = len; i >= 0; i--) {
    const num = digits[i] + mod;
    if (num >= 10) {
      mod = 1;
      newNum.unshift(num - 10);
    } else {
      mod = 0;
      newNum.unshift(num);
    }
  }
  if (mod === 1) {
    newNum.unshift(mod);
  }
  return newNum;
};
// @lc code=end
