function simpleQueue() {
  interface IStack {
    push(item: any): void;
    shift(): void;
    peekLast(): void;
    size(): number;
    peekFirst(): void;
  }

  class Stack implements IStack {
    public strorage: any[] = [];
    public capacity: number;

    constructor(capacity: number) {
      this.capacity = capacity;
    }

    public push(item: any): void {
      if (this.size() >= this.capacity) {
        console.error("This stack is already full");
      } else {
        this.strorage.push(item);
        console.log(this.strorage);
      }
    }
    public shift(): void {
      if (this.size() > 0) {
        this.strorage.shift();
        console.log(this.strorage);
      } else {
        console.error(`This storage is empty`);
      }
    }

    public peekLast(): void {
      console.log(this.strorage[this.size() - 1]);
    }

    public peekFirst(): void {
      console.log(this.strorage[0]);
    }

    public size(): number {
      return this.strorage.length;
    }
  }

  const stack = new Stack(3);

  stack.push({ res: 1, id: 2 });

  stack.push("str");

  stack.push(2);

  stack.shift();

  stack.peekFirst();
}

simpleQueue();
