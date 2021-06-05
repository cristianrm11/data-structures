class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }
  // underscode to make it private... just for understanding
  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }

  // implements get and set
  set(key, value) {
    let address = this._hash(key);
    if (!this.data[address]) {
      this.data[address] = [];
    }
    this.data[address].push([key, value]);
    return this.data;
  }

  get(key) {
    let address = this._hash(key);
    const currentBucket = this.data[address];
    if (currentBucket) {
      for (let i = 0; currentBucket.length; i++) {
        if (currentBucket[i][0] === key) {
          return currentBucket[i][1];
        }
      }
    }
  }

  keys() {
    const keysArray = [];
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i]) {
        keysArray.push(this.data[i][0][0]);
      }
    }
    return keysArray;
  }
}

const myHastTable = new HashTable(50);
myHastTable.set('grape', 1000);
myHastTable.set('apple', 2000);
myHastTable.set('orange', 3000);
myHastTable.set('oranges', 3000);

console.log(myHastTable.get('oranges'));

console.log(myHastTable.keys());

console.log(JSON.stringify(myHastTable));
