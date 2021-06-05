class dynamicArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  get(index) {
    return this.data[index];
  }

  push(item) {
    this.data[this.length] = item;
    this.length++;
  }

  pop() {
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }

  delete(index) {
    const item = this.data[index];
    this.shiftItems(index);
    return item;
  }

  shiftItems(index) {
    // take each item in the data and instead of the data before, now take the next data
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    // aftet shifting the items should delete the last one because it was assigned to the previous position
    delete this.data[this.length - 1];
    this.length--;
  }
}

const myNewArray = new dynamicArray();

myNewArray.push('myExampleItem');
myNewArray.push('myExampleItem2');
myNewArray.push('myExampleItem3');

console.log(myNewArray);

// myNewArray.pop();
myNewArray.delete(1);

console.log(myNewArray);
