let arr1 = [1, 5, 54];
let arr2: [number, number, number] = [2, 124, 4];

// let copyArr = [...arr2];
// copyArr.push(1);
// arr1 = [...arr1, ...arr2];

// console.log(Math.max(...arr1), copyArr);

function sum(x: number, y: number, z: number): number {
  return x + y + z;
}

sum(...arr2);
