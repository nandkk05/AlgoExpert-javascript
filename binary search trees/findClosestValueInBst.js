function findClosestValueInBst(tree, target) {
  return recursiveHelper(tree, target, tree.value);
}

function recursiveHelper(tree, target, closest) {
  if (tree.value === null) {
    return closest;
  }

  if (Math.abs(target - closest) > Math.abs(target - tree.value)) {
    closest = tree.value;
  }
  if (target > tree.value) {
    return recursiveHelper(tree.right, target, closest);
  } else if (target < tree.value) {
    return recursiveHelper(tree.left, target, closest);
  } else {
    return closest;
  }
}
