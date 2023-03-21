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

  static quickSort(arr: number[] = []): number[] {
    if (arr.length < 2) {
      return arr;
    }

    const left: number[] = [];
    const right: number[] = [];

    const min = 1;
    const max = arr.length - 1;
    const randomInt = Math.floor(min + Math.random() * (max + 1 - min));

    const pivot = arr[randomInt];

    arr.slice(arr.indexOf(pivot), 1);

    [pivot].concat(arr);

    for (let i = 1; i < arr.length; i++) {
      if (pivot > arr[i]) {
        left.push(arr[i]);
      } else {
        right.push(arr[i]);
      }
    }
    const res = this.quickSort(left).concat(pivot, this.quickSort(right));
    return res;
  }

  static insertionSort(arr: number[]): number[] {
    for (let i = 1; i < arr.length; i++) {
      let curr = arr[i];

      let j: number;

      for (j = i - 1; j >= 0 && arr[j] > curr; j--) {
        arr[j + 1] = arr[j];
      }

      arr[j + 1] = curr;
    }

    return arr;
  }

  static genRandNumArr(): number[] {
    const arr: number[] = [];
    for (let i = 0; i < 10000; i++) {
      const rand = Math.round(Math.random() * 10000);
      arr.push(rand);
    }
    return arr;
  }
}

// Sort.bubleSort([1, 2, 55, 21]);

// console.log(Sort.quickSort(Sort.genRandNumArr(100)));

console.log(Sort.insertionSort([5, 2, 4, 6, 1, 3]));
