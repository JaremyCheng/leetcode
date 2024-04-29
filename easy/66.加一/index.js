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
  // 作为初始加1数,以及下一位数字是否加一的值
  let mod = 1;
  const len = digits.length - 1;
  const newNum = [];
  for (let i = len; i >= 0; i--) {
    const num = digits[i] + mod;
    // 10则归零,然后mod=1,下一位继续计算
    if (num >= 10) {
      mod = 1;
      newNum.unshift(num - 10);
    } else {
      mod = 0;
      newNum.unshift(num);
    }
  }
  // 如果最后mod位1,则最前面需要再插入mod作为最大的一位
  if (mod === 1) {
    newNum.unshift(mod);
  }
  return newNum;
};
// @lc code=end
