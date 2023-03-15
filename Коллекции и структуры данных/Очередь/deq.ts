// const dequeue: number[] = [];

// dequeue.push(3);
// dequeue.push(8);

// dequeue.unshift(5);
// dequeue.unshift(11);

// dequeue.pop();

// dequeue.shift();

class Deque {
  public items;
  public count;
  public lowestCount;

  constructor() {
    this.items = {};
    this.count = 0;
    this.lowestCount = 0;
  }

  addRight(element) {
    this.items[this.count] = element;
    this.count++;
  }
  addLeft(element) {
    if (this.isEmpty()) {
      //1
      this.addRight(element);
    }
    // else if (this.lowestCount  > 0) {    //2
    // 	this.lowestCount --;
    // 	this.items[this.lowestCount] = element;
    // }
    else {
      //3
      for (let index = this.count; index > 0; index--) {
        this.items[index] = this.items[index - 1];
      }
      this.count++;
      this.items[0] = element;
    }
    return true;
  }

  isEmpty(): boolean {
    if (this.items.length > 1) {
      return true;
    } else {
      return false;
    }
  }
}

const deq = new Deque();

deq.addRight("elem1");

deq.addRight("elem2");

console.log(deq.items);
