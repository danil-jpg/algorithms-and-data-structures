function simpleLinkedList() {
  class Node {
    public value: any;
    public next: Node | null;

    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }

  class LinkedList {
    public head: Node;
    public length: number = 0;
    protected arr: Node[] = [];

    constructor() {}

    addToLastPos(value: any): Node[] {
      const node = new Node(value);

      if (this.length === 0) {
        this.head = node;
        this.arr.push(this.head);
      } else {
        let curr = this.head;

        while (curr.next) {
          curr = curr.next;
        }
        curr.next = new Node(value);

        this.arr.push(curr.next);
      }
      this.length++;

      return this.arr;
    }

    getNodeByPos(pos: number): Node | string {
      if (pos < 0 || pos > this.length) {
        console.error("Search failed");
        return "eror";
      } else {
        console.log(this.arr[pos]);
        return this.arr[pos];
      }
    }

    listAllValues(): void {
      console.table(this.arr);
    }
  }
  const list = new LinkedList();

  list.addToLastPos("1");
  list.addToLastPos("2");
  list.addToLastPos("3");
  list.addToLastPos("4");
  list.addToLastPos("5");
  list.addToLastPos("6");
  list.listAllValues();

  // list.addToLastPos("7");
  // list.addToLastPos("8");
  // list.getNodeByPos(4);
  // list.listAllValues();
  // console.log(list.listAllValues());
  //   list.getNodeByPos(1);
}

simpleLinkedList();

// removeLastNode(): any {
//   let curr: null | Node = this.head;

//   for (let i = 0; i < this.arr.length - 2; i++) {
//     curr = curr.next!;
//   }
//   while (curr.next) {
//     curr = curr.next;
//   }
//   curr.next = null;
//   console.log(curr);
// }
