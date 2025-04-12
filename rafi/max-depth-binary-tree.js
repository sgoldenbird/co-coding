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
 * @return {number}
 */
var maxDepth = function(root) {
    
  if (!root) {
      return 0
  }

  const traverseLeft = maxDepth(root.left)
  const traverseRight = maxDepth(root.right)

  return Math.max(traverseLeft, traverseRight) + 1
};