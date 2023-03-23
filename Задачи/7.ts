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

  static selectionSort(array: number[]): number[] {
    const arr = [...array];

    for (let i = 0; i < arr.length - 1; i++) {
      let minIndex = i;

      for (let j = i + 1; j < arr.length; j++) {
        if (arr[j] < arr[minIndex]) {
          minIndex = j;
        }
      }

      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
    return arr;
  }

  static countSort(inputArr: number[]): number[] {
    // Шаг 1 : найти самое большое число
    let maxNum = Math.max(...inputArr);
    let serviceVar;
    const count = new Array(maxNum + 1).fill(0);

    // Шаг 2 : посчитать количество повторений числа и записать в массив подсчета.
    for (let i = 0; i < inputArr.length; i++) {
      serviceVar = inputArr[i];
      count[serviceVar]++;
    }
    // Шаг 3 : посчитать кумулятивную суму каждого числа (1,3,5 => 1,4,9)
    for (let i = 1; i <= maxNum; i++) {
      count[i] = count[i] + count[i - 1];
    }

    const outputArr: number[] = [];

    // Шаг 4 : обращаясь с конца входящего массива к его числам,
    // находить их в массиве подсчета по индексу и записывать их в новый массив,
    // сдвигая на 1 еденицу назад,затем уменьшая кумулятивную сумму в массиве count на 1.

    for (let i = inputArr.length - 1; i >= 0; i--) {
      outputArr[count[inputArr[i]] - 1] = inputArr[i];
      count[inputArr[i]] = count[inputArr[i]] - 1;
    }

    return outputArr;
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

// console.log(Sort.countSort([1, 2, 55, 21]));

console.log(Sort.countSort(Sort.genRandNumArr()));

// console.log(Sort.insertionSort([5, 2, 4, 6, 1, 3]));
