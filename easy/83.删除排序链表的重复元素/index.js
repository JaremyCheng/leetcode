/*
 * @lc app=leetcode.cn id=83 lang=javascript
 *
 * [83] 删除排序链表中的重复元素
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
  const checkObj = {};
  const newHead = {
    value: 666,
    next: head,
  };
  // 创建变量用于迭代
  let iter = newHead;
  while (iter && iter.next) {
    if (checkObj[iter.next.val]) {
      // 存在重复值时, next删除,直接指向下一个next
      iter.next = iter.next.next;
    } else {
      // 不重复时标记后继续迭代
      checkObj[iter.next.val] = 1;
      iter = iter.next;
    }
  }
  return newHead.next;
};
// @lc code=end
