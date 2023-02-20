class Sort {
  // Сложность o(n`2)

  static bubleSort(arr: number[]): (number | number[])[] {
    let start = performance.now();
    for (let i = 0, endI = arr.length - 1; i < endI; i++) {
      for (let j = 0, endJ = endI - i; j < endJ; j++) {
        if (arr[j] > arr[j + 1]) {
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        }
      }
    }
    let end = performance.now() - start;
    console.log([arr, end]);
    return [arr, end];
  }
}

Sort.bubleSort([1, 2, 55, 21]);
