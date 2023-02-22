function binaryTree() {
    var Node = /** @class */ (function () {
        function Node(data) {
            this.left = null;
            this.right = null;
            this.data = data;
        }
        return Node;
    }());
    var BinaryResTree = /** @class */ (function () {
        function BinaryResTree() {
            this.root = null;
        }
        BinaryResTree.prototype.insertNode = function (int) {
            var newNode = new Node(int);
            if (this.root === null) {
                this.root = newNode;
            }
            else {
                this.insertNodeSort(this.root, newNode);
            }
        };
        BinaryResTree.prototype.insertNodeSort = function (parentNode, newNode) {
            if (newNode.data < parentNode.data) {
                if (parentNode.left === null) {
                    parentNode.left = newNode;
                }
                else {
                    this.insertNodeSort(parentNode.left, newNode);
                }
            }
            else {
                if (parentNode.right === null) {
                    parentNode.right = newNode;
                }
                else {
                    this.insertNodeSort(parentNode.right, newNode);
                }
            }
        };
        BinaryResTree.prototype.print = function () {
            console.dir(this);
        };
        return BinaryResTree;
    }());
    var binarySearch = new BinaryResTree();
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
