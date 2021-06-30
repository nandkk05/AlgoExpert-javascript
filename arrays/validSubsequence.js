// iterating over all array elements
// O(n) time || O(1) space
function validSubsequence(array, sequence) {
  let arrIndex = 0;
  let seqIndex = 0;
  while (arrIndex < array.length && seqIndex < sequence.length) {
    if (array[arrIndex] === sequence[seqIndex]) {
      seqIndex += 1;
    }
    arrIndex += 1;
  }
  return seqIndex === sequence.length;
}

console.log(validSubsequence([1, 2, 3, 4, 5, 6], [2, 3, 6]));
