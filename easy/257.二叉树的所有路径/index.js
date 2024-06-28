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
 * @return {string[]}
 */
var binaryTreePaths = function (root) {
  // 所有结果
  const rest = [];
  // 树路径
  const treePath = [];
  function dfs(nth) {
    //当前节点入栈
    treePath.push(nth.val);
    // 没有左右子节点的情况下收集全路径
    if (!nth.left & !nth.right) {
      rest.push(treePath.slice().join("->"));
    }
    // 有子节点情况往下递归
    nth.left && dfs(nth.left);
    nth.right && dfs(nth.right);
    // 当前节点出栈
    treePath.pop();
  }
  // 进入起点
  dfs(root);
  return rest;
};
