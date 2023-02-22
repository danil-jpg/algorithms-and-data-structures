function binaryTree() {
  class Node {
    public data: any;
    public left: any = null;
    public right: any = null;

    constructor(data: any) {
      this.data = data;
    }
  }

  class BinaryResTree {
    public root: Node | null = null;

    insertNode(int: number): void {
      const newNode = new Node(int);

      if (this.root === null) {
        this.root = newNode;
      } else {
        this.insertNodeSort(this.root, newNode);
      }
    }

    private insertNodeSort(parentNode: Node, newNode: Node): void {
      if (newNode.data < parentNode.data) {
        if (parentNode.left === null) {
          parentNode.left = newNode;
        } else {
          this.insertNodeSort(parentNode.left, newNode);
        }
      } else {
        if (parentNode.right === null) {
          parentNode.right = newNode;
        } else {
          this.insertNodeSort(parentNode.right, newNode);
        }
      }
    }

    print(): void {
      console.dir(this);
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

  binarySearch.print();
}

binaryTree();
