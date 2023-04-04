function fillArr(): number[] {
  const arr: number[] = [];

  for (let i = 0; i < 100; i++) {
    const randomInt = Math.floor(Math.random() * 100);

    arr[i] = randomInt;
  }

  return arr;
}

// Алгоритмическая сложность - O(n)

function findNum(arr: number[], numberToFind: number) {
  const res = arr.indexOf(numberToFind);
  console.log(res);
}

// findNum(fillArr(), 33);

// Но,если мы реализуем на отсортированном массиве алгоримт "разделяй и властвуй",то тогда сложность будет O(log n)

function countSort(inputArr: number[]): number[] {
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

let sortedArr = countSort(fillArr());

function searchNum(nums: number[], target: number) {
  let start = 0;
  let end = nums.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (nums[mid] === target) {
      console.log(nums, mid);
      return mid;
    } else if (nums[mid] < target) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return "there is no such  number";
}

console.log(searchNum(sortedArr, 66));

// Шаг 1 : заполнить масиив случайными числами (fillArr())
// Шаг 2 : разсортировать массив (countSort())
// Шаг 3 : алгоритм бинарного поиска находит или нет число .
