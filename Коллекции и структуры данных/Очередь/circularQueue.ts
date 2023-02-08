class CircularQueue {
  public element;
  public size;
  public length;
  public front;
  public back;

  constructor(size) {
    this.element = [];
    this.size = size;
    this.length = 0;
    this.front = 0;
    this.back = -1;
  }
  isEmpty(): boolean {
    return this.length == 0;
  }
  enqueue(addedElem) {
    if (this.length >= this.size) throw new Error("Maximum length exceeded");
    this.back++;
    this.element[this.back % this.size] = addedElem;
    console.log(this.back, this.size, this.back % this.size);
    this.length++;
  }
  dequeue() {
    if (this.isEmpty()) throw new Error("No elements in the queue");
    const value = this.getFront();
    this.element[this.front % this.size] = null;
    this.front++;
    this.length--;
    return value;
  }
  getFront() {
    if (this.isEmpty()) throw new Error("No elements in the queue");
    console.log(this.front, this.size, this.front % this.size);
    return this.element[this.front % this.size];
  }
  clear() {
    this.element = new Array();
    this.length = 0;
    this.back = 0;
    this.front = -1;
  }
  info() {
    // console.table(this.element, this.length);
    // console.table(this.back, this.front);
    console.table(this);
  }
}

const cl = new CircularQueue(3);

cl.enqueue(1);
cl.enqueue(2);
cl.enqueue(3);

cl.getFront();

// cl.info();
