/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  const len = s.length;
  let checkObj = [];
  let maxLen = 0;
  let nowLen = 0;
  let left = 0;
  let right = 0;

  while (right < len) {
    const char = s[right];
    const checkedIdx = checkObj.indexOf(char);
    if (checkedIdx >= 0) {
      maxLen = nowLen > maxLen ? nowLen : maxLen;
      left = left + checkedIdx + 1;
      right = left;
      console.log(left);
      checkObj = [];
      nowLen = 0;
      continue;
    }
    checkObj.push(char);
    nowLen++;
    right++;
  }
  return nowLen > maxLen ? nowLen : maxLen;
};
// @lc code=end
