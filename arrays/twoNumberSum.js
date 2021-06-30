// Brute force method to solve this problem
// O(n^2) time || O(1) space
function twoNumberSum(array, targetSum) {
  for (let i = 0; i < array.length - 1; i++) {
    const firstNum = array[i];
    for (let j = i + 1; j < array.length; j++) {
      const secondNum = array[j];
      if (firstNum + secondNum === targetSum) {
        return [firstNum, secondNum];
      }
    }
  }
  return [];
}

// Using hashing
// O(n) time || O(n) space
function twoNumberSum(array, targetSum) {
  const nums = {};
  for (num of array) {
    if (targetSum - num in nums) {
      return [targetSum - num, num];
    } else {
      nums[num] = true;
    }
  }
  return [];
}

// Using pointers
// O(nlog(n)) time || O(1) space
function twoNumberSum(array, targetSum) {
  array.sort((a, b) => a - b);
  let left = 0;
  let right = array.length - 1;
  while (left < right) {
    if (array[left] + array[right] === targetSum) {
      return [array[left], array[right]];
    } else if (array[left] + array[right] < targetSum) {
      left++;
    } else if (array[left] + array[right] > targetSum) {
      right--;
    }
  }
  return [];
}

twoNumberSum([3, 5, -4, 8, 11, -1, 1, 6], 10);
