class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}
class BST {
  tree = null

  insert(val) {
    // case: inserting first node
    if (!this.tree) {
      this.tree = new Node(val)
    }
    let current = this.tree
    const newNode = new Node(val)
    while (true) {
      if (val < current.val) {
        // case: left subtree
        if (!current.left) {
          current.left = newNode
          break
        } else {
          current = current.left
        }
      } else if (val > current.val) {
        // case: right subtree
        if (!current.right) {
          current.right = newNode
          break
        } else {
          current = current.right
        }
      } else {
        // case: we do nothing if node already exists in tree
        break
      }
    }
  }

  isValid() {
    const recursiveCheck = (tree) => {
      // stop loop for node if it is null
      if (!tree) {
        return true
      }
      if ((tree.left && tree.val < tree.left.val) || (tree.right && tree.val > tree.right.val)) {
        return false
      }
      return recursiveCheck(tree.left) && recursiveCheck(tree.right)
    }
    return recursiveCheck(this.root)
  };

  bfs() {
    const data = []
    const queue = []
    queue.push(this.tree)
    while (queue.length > 0) {
      const node = queue.shift();
      data.push(node.val)
      if (node.left) queue.push(node.left)
      if (node.right) queue.push(node.right)
    }
    return data
  };


  dfsPreorder() {
    const data = []
    const traverse = (root) => {
      data.push(root.val)
      if (root.left) traverse(root.left)
      if (root.right) traverse(root.right)
    }
    traverse(this.tree)
    return data
  }

  dfsPostorder() {
    const data = []
    const traverse = (root) => {
      if (root.left) traverse(root.left)
      if (root.right) traverse(root.right)
      data.push(root.val)
    }
    traverse(this.tree)
    return data
  }

  dfsInorder() {
    const data = []
    const traverse = (root) => {
      if (root.left) traverse(root.left)
      data.push(root.val)
      if (root.right) traverse(root.right)
    }
    traverse(this.tree)
    return data
  }
}
const bst = new BST();
bst.insert(6)
bst.insert(4)
bst.insert(3)
bst.insert(5)
bst.insert(14)
bst.insert(7)
bst.insert(11)
bst.insert(61)
bst.insert(51)
const tree = bst.tree

console.log('-----------------isValid-----------------')
console.log(bst.isValid())
console.log('-------------------bfs-------------------')
console.log(bst.bfs(tree))
console.log('-----------------dfsPreorder-----------------')
console.log(bst.dfsPreorder())
console.log('-----------------dfsInorder-----------------')
console.log(bst.dfsInorder())
console.log('-----------------dfsPostorder-----------------')
console.log(bst.dfsPostorder())