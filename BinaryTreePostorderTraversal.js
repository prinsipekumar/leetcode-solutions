class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

function postorderTraversal(root) {
  if (!root) return [];

  const result = [];
  const stack = [root];

  while (stack.length) {
    const node = stack.pop();

    result.push(node.val);

    if (node.left) stack.push(node.left);
    if (node.right) stack.push(node.right);
  }

  return result.reverse();
}

// Example 1
//      1
//       \
//        2
//       /
//      3

const root1 = new TreeNode(1, null, new TreeNode(2, new TreeNode(3)));

console.log(postorderTraversal(root1)); //[3, 2, 1]

// Example 2
const root2 = null;

console.log(postorderTraversal(root2)); //[]

// Example 3
//      1
//     / \
//    2   3
//   / \
//  4   5

const root3 = new TreeNode(
  1,
  new TreeNode(2, new TreeNode(4), new TreeNode(5)),
  new TreeNode(3),
);

console.log(postorderTraversal(root3)); //[4, 5, 2, 3, 1]
