/*
 * @lc app=leetcode.cn id=19 lang=javascript
 *
 * [19] 删除链表的倒数第 N 个结点
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
 * @param {number} n
 * @return {ListNode}
 */
/**
 * fast用于循环, slow在位置到达n时, 会更改为n位置的节点
 * 最后将下一节点直接替换掉为下下个节点来进行节点删除
 */
var removeNthFromEnd = function (head, n) {
  let newHead = { val: 666, next: head };
  let slow = (fast = newHead);
  let gap = 0;
  while (fast && fast.next) {
    fast = fast.next;
    if (gap < n) {
      gap++;
    } else {
      slow = slow.next;
    }
  }
  slow.next = slow.next ? slow.next.next : null;
  return newHead.next;
};
// @lc code=end
