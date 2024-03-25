/*
 * @lc app=leetcode.cn id=58 lang=javascript
 *
 * [58] 最后一个单词的长度
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  // 按照空格分割字符串
  const arr = s.split(" ");
  for (let i = arr.length - 1; i > 0; i--) {
    if (arr[i] && arr[i].length) {
      return arr[i].length;
    }
  }
  return 0;
};
// @lc code=end
