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
  }

  findElemByPos(pos: number) {
    const res = this.arr[pos];

    console.log(res);

    return res;
  }
}

const concreteQueue = new CircularQueue(6);

concreteQueue.enqueue("first");
concreteQueue.enqueue("Second");
concreteQueue.enqueue("Third");
concreteQueue.enqueue("Fourth");
concreteQueue.enqueue("Fifth");
concreteQueue.enqueue("Sixth");

concreteQueue.dequeue();

concreteQueue.findElemByPos(2);
