function simpleLinkedList() {
    var Node = /** @class */ (function () {
        function Node(value) {
            this.value = value;
            this.next = null;
        }
        return Node;
    }());
    var LinkedList = /** @class */ (function () {
        function LinkedList() {
            this.length = 0;
            this.arr = [];
        }
        LinkedList.prototype.addToLastPos = function (value) {
            var node = new Node(value);
            if (this.length === 0) {
                this.head = node;
                this.arr.push(this.head);
            }
            else {
                var curr = this.head;
                while (curr.next) {
                    curr = curr.next;
                }
                curr.next = new Node(value);
                this.arr.push(curr.next);
            }
            this.length++;
            return this.arr;
        };
        LinkedList.prototype.getNodeByPos = function (pos) {
            if (pos < 0 || pos > this.length) {
                console.error("Search failed");
                return "eror";
            }
            else {
                console.log(this.arr[pos]);
                return this.arr[pos];
            }
        };
        LinkedList.prototype.listAllValues = function () {
            console.table(this.arr);
        };
        return LinkedList;
    }());
    var list = new LinkedList();
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
