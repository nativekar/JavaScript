const maxDepth = (root) => {
  if (!root) return 0;
  let max = Math.max(maxDepth(root.left), maxDepth(root.right));
  return max + 1;
};

// OR

const maxDepth1Liner = (root) =>
  root
    ? Math.max(maxDepth1Liner(root.left), maxDepth1Liner(root.right)) + 1
    : 0;
