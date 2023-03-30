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
            this.arr = [];
        }
        BinaryResTree.prototype.insertNode = function (int) {
            var newNode = new Node(int);
            if (this.root === null) {
                this.arr.push(newNode);
                this.root = newNode;
            }
            else {
                this.insertNodeSort(this.root, newNode);
            }
        };
        BinaryResTree.prototype.insertNodeSort = function (parentNode, newNode) {
            if (newNode.data < parentNode.data) {
                if (parentNode.left === null) {
                    this.arr.push(newNode);
                    parentNode.left = newNode;
                }
                else {
                    this.insertNodeSort(parentNode.left, newNode);
                }
            }
            else {
                if (parentNode.right === null) {
                    this.arr.push(newNode);
                    parentNode.right = newNode;
                }
                else {
                    this.insertNodeSort(parentNode.right, newNode);
                }
            }
        };
        BinaryResTree.prototype.searchDepth = function (parentNode, searchInt) {
            if (this.root === null || parentNode === null) {
                console.error("Eror");
                return null;
            }
            else if (searchInt < parentNode.data) {
                this.searchDepth(parentNode.left, searchInt);
            }
            else if (searchInt > parentNode.data) {
                this.searchDepth(parentNode.right, searchInt);
            }
            else {
                console.log("Search succesfull!");
                console.log(parentNode);
                return parentNode;
            }
            return null;
        };
        BinaryResTree.prototype.searchBreath = function (searchInt) {
            for (var i = 0; i < this.arr.length; i++) {
                if (this.arr[i].data === searchInt) {
                    console.log(this.arr[i]);
                    return this.arr[i];
                }
            }
        };
        BinaryResTree.prototype.print = function () {
            console.log(this);
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
    // binarySearch.searchDepth(binarySearch.root, 2);
    binarySearch.searchBreath(3);
    // binarySearch.print();
}
binaryTree();
