/*
 * @lc app=leetcode.cn id=67 lang=javascript
 *
 * [67] 二进制求和
 */

// @lc code=start
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
/**
 * 二进制求值就是大于2则进1, 二进制可以将字符串切割后反过来计算
 */
var addBinary = function (a, b) {
  const aArr = a.split("").reverse();
  const bArr = b.split("").reverse();
  let mod = 0;
  const result = [];
  const maxLen = aArr.length > bArr.length ? aArr.length : bArr.length;
  for (let i = 0; i < maxLen; i++) {
    const num = Number(aArr[i] || 0) + Number(bArr[i] || 0) + mod;
    if (num >= 2) {
      mod = 1;
      result.push(num - 2);
    } else {
      mod = 0;
      result.push(num);
    }
  }
  if (mod) {
    result.push(mod);
  }
  return result.reverse().join("");
};
// @lc code=end
