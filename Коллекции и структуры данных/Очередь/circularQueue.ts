class CircularQueue {
  public back: number = 0;
  public front: number = 0;
  public length: number = 0;
  public capacity: number;
  public arr: any[] = [];

  constructor(capacity) {
    this.capacity = capacity;
  }

  enqueue(elem: any): void {
    if (this.length >= this.capacity) {
      throw new Error("Out of capacity");
    }
    if (this.length === 0) {
      this.back = 0;
      this.arr[this.back % this.capacity] = elem;
      this.back++;
      this.length++;
      // console.log(this.arr);
    } else {
      this.arr[this.back % this.capacity] = elem;
      this.back++;
      this.length++;
      // console.log(this.arr);
    }
  }

  dequeue(): void {
    if (this.length > 0) {
      this.arr[this.front % this.capacity] = null;

      this.front++;
      this.length--;

      // console.log(this.arr);
    }
    if (this.length === 0) {
      this.front = 0;
    }
  }

  findElemByPos(pos: number) {
    const res = this.arr[pos];

    console.log(res);

    return res;
  }

  print(): void {
    const nextToDelete = this.arr[this.front];
    const firstPart = this.arr.slice(0, this.arr.indexOf(nextToDelete));

    const secondPart = this.arr.slice(this.arr.indexOf(nextToDelete) + 1, this.arr.length);

    console.log(``);
    console.log(`%c${firstPart} %c${nextToDelete} %c${secondPart}`, "background: transparent; color: red", "background: transparent; color: #bada55", "background: transparent; color: black");
    console.log(``);
  }
}

const concreteQueue = new CircularQueue(6);

concreteQueue.enqueue("1");
concreteQueue.enqueue("2");
concreteQueue.enqueue("3");
concreteQueue.enqueue("4");
concreteQueue.enqueue("5");
concreteQueue.enqueue("6");

concreteQueue.dequeue();
concreteQueue.dequeue();

concreteQueue.enqueue("7");
concreteQueue.enqueue("8");
concreteQueue.dequeue();
concreteQueue.dequeue();

concreteQueue.print();

// concreteQueue.dequeue();
// concreteQueue.dequeue();
// concreteQueue.dequeue();
// concreteQueue.dequeue();
// concreteQueue.dequeue();
// concreteQueue.dequeue();

// concreteQueue.enqueue("9");
// concreteQueue.enqueue("10");
// concreteQueue.enqueue("11");
// concreteQueue.enqueue("12");
// concreteQueue.enqueue("13");
// concreteQueue.enqueue("14");

// concreteQueue.dequeue();

// concreteQueue.print();
