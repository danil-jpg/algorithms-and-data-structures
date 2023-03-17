class Heap {
  public heap: number[];

  constructor() {
    this.heap = [];
  }

  insertMinNum(int: number): void {
    this.heap.push(int);

    let curr = this.heap.length - 1;

    for (curr; curr > 0 && this.heap[Math.floor(curr / 2)] > this.heap[curr]; curr = Math.floor(curr / 2)) {
      [this.heap[Math.floor(curr / 2)], this.heap[curr]] = [this.heap[curr], this.heap[Math.floor(curr / 2)]];
    }
  }
}

const heap = new Heap();

heap.insertMinNum(1);

heap.insertMinNum(2);

heap.insertMinNum(5);

heap.insertMinNum(0);

heap.insertMinNum(-1);

heap.insertMinNum(-10);

heap.insertMinNum(-55);

heap.insertMinNum(55);

heap.insertMinNum(-51);

heap.insertMinNum(-1);

console.log(heap.heap);
