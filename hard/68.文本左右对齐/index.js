/*
 * @lc app=leetcode.cn id=68 lang=javascript
 *
 * [68] 文本左右对齐
 */

// @lc code=start
/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
var fullJustify = function (words, maxWidth) {
  const resultArr = [];
  function justifyWhitespace(word) {
    const wordArr = word.split(" ");
    const len = wordArr.length;
    const whitespaceCount = maxWidth - word.length;
    for (let i = 0; i < whitespaceCount; i++) {
      // 除开最后一个元素, 对其他元素平均插入空格
      // 只有一个元素时, 为i%1, 永远对第0个元素进行处理
      const target = i % (len - 1 > 0 ? len - 1 : 1);
      wordArr[target] = wordArr[target] + " ";
    }
    return wordArr.join(" ");
  }
  let remain = words.reduce((acc, curV) => {
    const accLen = acc.length;
    const curVLen = curV.length;
    if (accLen + curVLen + 1 > maxWidth) {
      // 在超出长度时, 将现有字符串处理空格后推入数组
      // 判断acc避免第一个单词长度长度与maxWidth相等
      acc && resultArr.push(justifyWhitespace(acc));
      return curV;
    }
    // 判断acc避免第一次单词前面出现空格
    return acc ? acc + " " + curV : curV;
  }, "");
  const remainLen = remain.length;
  if (remain && remainLen <= maxWidth) {
    // 对剩余词语补充空格
    for (let i = 0; i < maxWidth - remainLen; i++) {
      remain = remain + " ";
    }
    resultArr.push(remain);
  }
  return resultArr;
};
// @lc code=end
