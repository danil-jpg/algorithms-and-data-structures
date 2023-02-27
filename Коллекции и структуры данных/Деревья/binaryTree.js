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
        BinaryResTree.prototype.search = function (parentNode, searchInt) {
            if (this.root === null) {
                console.error("There is no root element!");
                return null;
            }
            else if (parentNode === null) {
                console.error("There is no such an integer!");
                return null;
            }
            else if (searchInt < parentNode.data) {
                this.search(parentNode.left, searchInt);
            }
            else if (searchInt > parentNode.data) {
                this.search(parentNode.right, searchInt);
            }
            else {
                console.log("Search succesfull!");
                console.log(parentNode);
                return parentNode;
            }
            return null;
        };
        // findAndDeleteMinNode(node: Node | null): Node | null {
        //   if (node === null) {
        //     console.error(`Node is null`);
        //     return null;
        //   } else {
        //     if (node.left === null) {
        //       node = null;
        //       return node;
        //     } else {
        //       return this.findAndDeleteMinNode(node.left);
        //     }
        //   }
        // }
        BinaryResTree.prototype.minNode = function (node) {
            // если слева от узла ноль тогда это должен быть минимальный узел
            if (node.left === null)
                return node;
            else
                return this.minNode(node.left);
        };
        BinaryResTree.prototype.remove = function (data) {
            this.root = this.removeNode(this.root, data); // helper method below
        };
        BinaryResTree.prototype.removeNode = function (node, data) {
            if (node === null) {
                return null;
                // если данные, которые нужно удалить, меньше, чем данные корня, переходим к левому поддереву
            }
            else if (data < node.data) {
                node.left = this.removeNode(node.left, data);
                return node;
                // если данные, которые нужно удалить, больше, чем данные корня, переходим к правому поддереву
            }
            else if (data > node.data) {
                node.right = this.removeNode(node.right, data);
                return node;
                // если данные такие как данные корня, удаляем узел
            }
            else {
                // удаляем узел без потомков (листовой узел (leaf) или крайний)
                if (node.left === null && node.right === null) {
                    node = null;
                    return node;
                }
                // удаляем узел с одним потомком
                if (node.left === null) {
                    node = node.right;
                    return node;
                }
                else if (node.right === null) {
                    node = node.left;
                    return node;
                }
                // удаляем узел с двумя потомками
                // minNode правого поддерева хранится в новом узле
                var newNode = this.minNode(node.right);
                node.data = newNode.data;
                node.right = this.removeNode(node.right, newNode.data);
                return node;
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
    binarySearch.removeNode(binarySearch.root, -1);
    // binarySearch.search(binarySearch.root, 2);
    binarySearch.print();
}
binaryTree();
