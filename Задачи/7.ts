class Sort {
  bubleSort(arr: number[]): void {}
}

const bubbleSort = (arr) => {
  let start = performance.now();
  for (let i = 0, endI = arr.length - 1; i < endI; i++) {
    for (let j = 0, endJ = endI - i; j < endJ; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  let end = performance.now() - start;
  return [arr, end];
};

console.log(bubbleSort([5, 3, 22, 1, 5, 3, 22, 1, 5, 3, 22, 1, 5, 3, 22, 1, 5, 3, 22, 1, 5, 3, 22, 1, 5, 3, 22, 1, 5, 3, 22, 1, 5, 3, 22, 1]));
