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
      console.log(this.arr);
    } else {
      this.arr[this.back % this.capacity] = elem;
      this.back++;
      this.length++;
      console.log(this.arr);
    }
  }

  dequeue(): void {
    if (this.length > 0) {
      this.arr[this.front % this.capacity] = null;

      this.front++;
      this.length--;

      console.log(this.arr);
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
}

const concreteQueue = new CircularQueue(6);

concreteQueue.enqueue("AAA");
concreteQueue.enqueue("BBB");
concreteQueue.enqueue("CCC");
concreteQueue.enqueue("DDD");
concreteQueue.enqueue("EEE");
concreteQueue.enqueue("FFF");

// concreteQueue.enqueue("GGG");
concreteQueue.dequeue();
concreteQueue.dequeue();
concreteQueue.enqueue("GGG");
concreteQueue.enqueue("III");
concreteQueue.dequeue();
concreteQueue.dequeue();
// concreteQueue.dequeue();
// concreteQueue.dequeue();
// concreteQueue.dequeue();
// concreteQueue.dequeue();

// concreteQueue.enqueue("AAA1");
// concreteQueue.enqueue("AAA2");
// concreteQueue.enqueue("AAA3");
// concreteQueue.enqueue("AAA4");
// concreteQueue.enqueue("AAA5");
// concreteQueue.enqueue("AAA6");

concreteQueue.dequeue();
