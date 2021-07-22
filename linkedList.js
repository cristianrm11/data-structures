class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
    };

    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const newNode = new Node(value);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }

  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
  }

  printList() {
    const array = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return array;
  }

  insert(index, value) {
    // fist step check params
    // if index is greater than or equal to the length then should add to the end of the linkedlist
    // if the index is zero then it should add to the beginning of the linkedlist
    if (index === 0) {
      return this.prepend(value);
    }

    if (index >= this.length) {
      return this.append(value);
    }

    const newNode = {
      value: value,
      next: null,
    };

    const leader = this.traversetoIndex(index - 1);

    const prevPointer = leader.next;
    leader.next = newNode;
    newNode.next = prevPointer;
    this.length++;
  }

  traversetoIndex(index) {
    let counter = 0;
    let currentNode = this.head;
    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }

  remove(index) {
    const leader = this.traversetoIndex(index - 1);
    const unwatedNode = leader.next;
    leader.next = unwatedNode.next;
    this.length--;
  }

  reverse() {
    if (!this.head.next) return this.head;

    let firstNode = this.head;
    this.tail = this.head;
    let secondNode = firstNode.next;
    while (secondNode !== null) {
      const temp = secondNode.next;
      secondNode.next = firstNode;
      firstNode = secondNode;
      secondNode = temp;
    }
    this.head.next = null;
    this.head = firstNode;
  }
}

const myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(3);
myLinkedList.insert(0, 99);
myLinkedList.insert(2, 55);
console.log(myLinkedList.printList());
myLinkedList.remove(2);

myLinkedList.reverse();

console.log(myLinkedList.printList());
