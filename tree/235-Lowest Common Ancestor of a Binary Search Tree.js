/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */

//BST树 
var lowestCommonAncestor = function (root, p, q) {
    if (p.val > q.val) {
        [p, q] = [q, p] //解构赋值
    }

    if (root.val == p.val || root.val == q.val) {
        return root
    }
    if (root.val > p.val && root.val < q.val) {
        return root
    }
    if (root.val > q.val) {
        return lowestCommonAncestor(root.left, p, q)
    }
    if (root.val < p.val) {
        return lowestCommonAncestor(root.right, p, q)
    }
};