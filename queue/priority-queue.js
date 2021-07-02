class Node {
  priority
  description
}

class PriorityQueue {
  values = []

  enqueue(node) {
    this.values.push(node)
    if (this.values.length > 1) {
      this.balanceAfterInsert(node)
    }
    return this.values
  }

  balanceAfterInsert(node) {
    let index = this.values.length - 1
    while (index > 0) {
      const parentIndex = Math.floor(index - 1 / 2)
      const parent = this.values[parentIndex]
      if (node.priority < parent.priority) {
        this.swap(this.values, index, parentIndex)
        index = parentIndex
      } else {
        break
      }
    }
  }

  swap(arr, fromIndex, toIndex) {
    const from = arr[fromIndex]
    arr[fromIndex] = arr[toIndex]
    arr[toIndex] = from
    return arr
  }

  dequeue() {
    this.swap(this.values, 0, this.values.length - 1)
    const highest = this.values.pop();
    if (this.values.length > 1) {
      this.balanceAfterRemoval(this.values[0])
    }
    return highest;
  }

  balanceAfterRemoval(node) {
    let index = 0;
    
    while (true) {
      let substitute
      const leftIndex = (2 * index) + 1
      const rightIndex = (2 * index) + 2
      const leftChild = this.values[leftIndex]
      const rightChild = this.values[rightIndex]

      if(leftIndex < this.values.length) {
          if(leftChild.priority < node.priority) {
              substitute = leftIndex
          } 
      }
      if(rightIndex < this.values.length) {
          if(rightChild.priority < node.priority && leftChild.priority > rightChild.priority) {
              substitute = rightIndex
          }
      }
      if(!substitute) break
      this.swap(this.values, substitute, index)
      index = substitute
    }
  }
}

const priorityQueue = new PriorityQueue()
priorityQueue.enqueue({ priority: 5, description: "covid symptoms - fever" })
priorityQueue.enqueue({ priority: 6, description: "covid symptoms - cold" })
priorityQueue.enqueue({ priority: 7, description: "flu" })
priorityQueue.enqueue({ priority: 3, description: "typhoid" })
priorityQueue.enqueue({ priority: 4, description: "cancer routine" })
priorityQueue.enqueue({ priority: 1, description: "accident" })
const queue = priorityQueue.enqueue({ priority: 2, description: "covid symptoms - breathing issues" })
console.log("----------------Queue--------------")
console.log(queue)
console.log("----------------priority: 1--------------")
console.log(priorityQueue.dequeue());
console.log("----------------priority: 2--------------")
console.log(priorityQueue.dequeue());
console.log("----------------priority: 3--------------")
console.log(priorityQueue.dequeue());
console.log("----------------priority: 4--------------")
console.log(priorityQueue.dequeue());
console.log("--------------Remaining Queue--------------")
console.log(queue)