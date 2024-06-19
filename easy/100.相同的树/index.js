/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
  // 两个结点都为null, 相等返回true
  if (!p && !q) return true;
  // 其中一个结点为null, 不相等返回false
  if ((!p && q) || (!q && p)) return false;
  // 根结点不相等,返回false
  if (p.val !== q.val) return false;
  // 递归校验左子树或者右子树不相同, 返回false
  if (!isSameTree(p.left, q.left) || !isSameTree(p.right, q.right))
    return false;
  // 全部相同返回true
  return true;
};
