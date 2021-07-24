// O(n) Time || O(n) Space
function branchSums(root) {
  const sums = [];
  calculateBranchSums(root, 0, sums);
  return sums;
}

function calculateBranchSums() {
  if (!node) return;

  const newRunningSum = runningSum + node.value;
  if (!node.left && !node.right){
    return sums.push(newRunningSum) 
  }

  calculateBranchSums(node.left, newRunningSum, sums)
  calculateBranchSums(node.right, newRunningSum, sums)
}
