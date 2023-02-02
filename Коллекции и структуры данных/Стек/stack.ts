interface IStack {
  push(item: any): void;
  pop(): void;
  peekLast(): any;
  size(): number;
}

class Stack implements IStack {
  public strorage: any[] = [];
  public capacity: number;

  constructor(capacity: number) {
    this.capacity = capacity;
  }

  public push(item: any): void {
    if (this.size() === this.capacity) {
      console.error("This stack is already full");
    } else {
      this.strorage.push(item);
      console.log(this.strorage);
    }
  }
  public pop(): void {
    if (this.size() > 0) {
      this.strorage.pop();
      console.log(this.strorage);
    } else {
      console.error(`This storage is empty`);
    }
  }

  public peekLast(): any {
    console.log(this.strorage[this.size() - 1]);
  }

  public size(): number {
    return this.strorage.length;
  }
}

const stack = new Stack(3);

stack.push({ res: 1, id: 2 });

stack.push("str");

stack.push(2);

stack.push("red");

stack.pop();

console.log(stack.size());

stack.peekLast();
