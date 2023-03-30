function binaryTree() {
  class Node {
    public data: number;
    public left: Node | null = null;
    public right: Node | null = null;

    constructor(data: any) {
      this.data = data;
    }
  }

  class BinaryResTree {
    public root: Node | null = null;
    public arr: Node[] = [];

    insertNode(int: number): void {
      const newNode = new Node(int);

      if (this.root === null) {
        this.arr.push(newNode);
        this.root = newNode;
      } else {
        this.insertNodeSort(this.root, newNode);
      }
    }

    private insertNodeSort(parentNode: Node, newNode: Node): void {
      if (newNode.data < parentNode.data) {
        if (parentNode.left === null) {
          this.arr.push(newNode);
          parentNode.left = newNode;
        } else {
          this.insertNodeSort(parentNode.left, newNode);
        }
      } else {
        if (parentNode.right === null) {
          this.arr.push(newNode);
          parentNode.right = newNode;
        } else {
          this.insertNodeSort(parentNode.right, newNode);
        }
      }
    }

    searchDepth(parentNode: Node | null, searchInt: number): Node | null {
      if (this.root === null || parentNode === null) {
        console.error("Eror");
        return null;
      } else if (searchInt < parentNode.data) {
        this.searchDepth(parentNode.left, searchInt);
      } else if (searchInt > parentNode.data) {
        this.searchDepth(parentNode.right, searchInt);
      } else {
        console.log(`Search succesfull!`);
        console.log(parentNode);
        return parentNode;
      }

      return null;
    }

    searchBreath(searchInt: number) {
      for (let i = 0; i < this.arr.length; i++) {
        if (this.arr[i].data === searchInt) {
          console.log(this.arr[i]);
          return this.arr[i];
        }
      }
    }

    print(): void {
      console.log(this);
    }
  }

  const binarySearch = new BinaryResTree();

  binarySearch.insertNode(1);

  binarySearch.insertNode(2);

  binarySearch.insertNode(0);

  binarySearch.insertNode(3);

  binarySearch.insertNode(-1);

  binarySearch.insertNode(15);

  binarySearch.insertNode(1);

  binarySearch.insertNode(0.7);

  // binarySearch.searchDepth(binarySearch.root, 2);

  binarySearch.searchBreath(3);

  // binarySearch.print();
}

binaryTree();
