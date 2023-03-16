// const dequeue: number[] = [];

// dequeue.push(3);
// dequeue.push(8);

// dequeue.unshift(5);
// dequeue.unshift(11);

// dequeue.pop();

// dequeue.shift();

class Deque {
  public items: object;
  public count: number;
  public lowestCount: number;

  constructor() {
    this.items = {};
    this.count = 0;
    this.lowestCount = 0;
  }

  addBack(element: any): void {
    this.items[this.count] = element;
    this.count++;
  }
  addFront(element: any): void {
    if (this.isEmpty()) {
      this.addBack(element);
    } else if (this.lowestCount > 0) {
      this.lowestCount--;
      this.items[this.lowestCount] = element;
    } else {
      for (let index = this.count; index > 0; index--) {
        this.items[index] = this.items[index - 1];
      }
      this.count++;
      this.items[0] = element;
    }
  }

  removeFront(): any {
    if (this.isEmpty()) {
      return `Object is empty`;
    }

    let result = this.items[this.lowestCount];
    delete this.items[this.lowestCount];
    this.lowestCount++;
    return result;
  }

  removeBack(): any {
    if (this.isEmpty()) {
      return `Object is empty`;
    }
    let result = this.items[this.count - 1];
    delete this.items[this.count - 1];
    this.count--;
    return result;
  }

  isEmpty(): boolean {
    if (Object.keys(this.items).length === 0) {
      return true;
    } else {
      return false;
    }
  }
}

const deq = new Deque();

deq.addBack("elem1");

deq.addBack("elem2");

deq.addBack("elem3");

deq.addFront("elem4");

deq.removeFront();

deq.addFront("elem5");

console.log(deq.items);
