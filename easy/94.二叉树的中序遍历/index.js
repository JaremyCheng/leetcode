/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function (root) {
  // 创建结果数组
  const result = [];
  // 递归方法
  function inorder(node, arr) {
    // 没有节点的时候中断递归
    if (!node) return;
    // 中序遍历先递归左子树
    inorder(node.left, arr);
    // 再记录根结点
    arr.push(node.val);
    // 最后递归右子树
    inorder(node.right, arr);
  }
  inorder(root, result);
  return result;
};
