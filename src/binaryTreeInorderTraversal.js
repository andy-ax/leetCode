/**
 * 108ms
 * 二叉树的中序遍历
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    var result = [];
    var inOrderTraverseNode = function(node){
		if (node !== null) {
			inOrderTraverseNode(node.left);
			result.push(node.val);
			inOrderTraverseNode(node.right);
		}
	};
	inOrderTraverseNode(root);
	return result;
};
