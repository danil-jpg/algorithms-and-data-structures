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

[2, 5, 12, 32];

Sort.bubleSort([1, 2, 55, 21]);

// function swap(items, firstIndex, secondIndex) {
//   const temp = items[firstIndex];
//   items[firstIndex] = items[secondIndex];
//   items[secondIndex] = temp;
// }

// function partition(items, left, right) {
//   var pivot = items[Math.floor((right + left) / 2)],
//     i = left,
//     j = right;

//   while (i <= j) {
//     while (items[i] < pivot) {
//       i++;
//     }

//     while (items[j] > pivot) {
//       j--;
//     }

//     if (i <= j) {
//       swap(items, i, j);
//       i++;
//       j--;
//     }
//   }

//   return i;
// }

// function quickSort(items, left, right) {
//   var index;

//   if (items.length > 1) {
//     index = partition(items, left, right);

//     if (left < index - 1) {
//       quickSort(items, left, index - 1);
//     }

//     if (index < right) {
//       quickSort(items, index, right);
//     }
//   }

//   return items;
// }
// var items = [4, 2, 6, 5, 3, 9];

// var result = quickSort(items, 0, items.length - 1);
// console.log(result);

// https://habr.com/ru/post/492346/

// function simpleLinkedList() {
//   class Node {
//     public value: any;
//     public next: Node | null;

//     constructor(value) {
//       this.value = value;
//       this.next = null;
//     }
//   }

//   class LinkedList {
//     public head: Node;
//     public length: number = 0;
//     protected arr: Node[] = [];
//     public nodeNum: number = -1;

//     constructor() {
//       this.arr = [];
//     }

//     addToLastPos(value: any): Node[] {
//       const node = new Node(value);

//       if (this.length === 0) {
//         this.head = node;
//         this.arr.push(this.head);
//       } else {
//         let curr = this.head;

//         while (curr.next) {
//           curr = curr.next;
//         }
//         curr.next = new Node(value);

//         this.arr.push(curr);
//       }
//       this.length++;

//       return this.arr;
//     }

//     getNodeByPos(pos: number): Node | string {
//       if (pos < 0 || pos > this.length) {
//         console.error("Search failed");
//         return "eror";
//       } else {
//         console.log(this.arr[pos]);
//         return this.arr[pos];
//       }
//     }

//     listAllValues(): void {
//       console.table(this.arr);
//     }

//     removeLastNode(): any {}
//   }
//   const list = new LinkedList();

//   list.addToLastPos("1");
//   list.addToLastPos("2");

//   // list.addToLastPos("5");

//   list.addToLastPos("3");
//   list.addToLastPos("5");
//   list.addToLastPos("6");
//   list.removeLastNode();
//   list.listAllValues();
//   // console.log(list.listAllValues());
//   //   list.getNodeByPos(1);
// }

// simpleLinkedList();
