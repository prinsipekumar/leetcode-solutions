class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

function preorderTraversal(root) {
  if (!root) return [];

  const result = [];
  const stack = [root];

  while (stack.length) {
    const node = stack.pop();

    result.push(node.val);

    if (node.right) stack.push(node.right);
    if (node.left) stack.push(node.left);
  }

  return result;
}

const root1 = new TreeNode(1, null, new TreeNode(2, new TreeNode(3)));

console.log(preorderTraversal(root1)); //[1, 2, 3]

const root2 = null;

console.log(preorderTraversal(root2)); //[]

const root3 = new TreeNode(
  1,
  new TreeNode(2, new TreeNode(4), new TreeNode(5)),
  new TreeNode(3),
);

console.log(preorderTraversal(root3)); //[1, 2, 4, 5, 3]
