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
  const arr = s.split(" ").reverse();
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] && arr[i].length) {
      return arr[i].length;
    }
  }
  return 0;
};
// @lc code=end
