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

    search(parentNode: Node | null, searchInt: number): Node | null {
      if (this.root === null) {
        console.error("There is no root element!");
        return null;
      } else if (parentNode === null) {
        console.error("There is no such an integer!");
        return null;
      } else if (searchInt < parentNode.data) {
        this.search(parentNode.left, searchInt);
      } else if (searchInt > parentNode.data) {
        this.search(parentNode.right, searchInt);
      } else {
        console.log(`Search succesfull!`);
        console.log(parentNode);
        return parentNode;
      }

      return null;
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

  binarySearch.search(binarySearch.root, 2);

  binarySearch.print();
}

binaryTree();
