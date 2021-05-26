class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }

  insert(val) {
    if (val < this.val && !this.left) {
      this.left = new Node(val);
    } else if (val < this.val && this.left) {
      this.left.insert(val);
    } else if (val > this.val && !this.right) {
      this.right = new Node(val);
    } else if (val > this.val && this.right) {
      this.right.insert(val);
    }
  }

  search(element) {
    if (this.val === element) return true;
    else if (this.val > element && this.left) {
      return this.left.search(element);
    } else if (this.val < element && this.right) {
      return this.right.search(element);
    } else return false;
  }
}

let bst = new Node(10);
bst.insert(7);
bst.insert(12);
bst.insert(18);
bst.insert(3);
console.log(bst);
console.log(bst.search(12));
