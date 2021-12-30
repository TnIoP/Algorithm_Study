const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

class Node {
  constructor(item) {
    this.item = item;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(item) {
    const node = new Node(item);
    if (this.head === null) {
      this.head = node;
      this.head.next = null;
    } else {
      this.tail.next = node;
    }
    this.tail = node;
    this.length++;
  }

  pop() {
    if (this.empty() == 1) return -1;
    const popItem = this.head;
    this.head = this.head.next;
    this.length--;
    return popItem.item;
  }

  size() {
    return this.length;
  }

  empty() {
    if (this.length == 0) {
      return 1;
    } else {
      return 0;
    }
  }

  front() {
    if (this.empty() == 1) return -1;
    return this.head.item;
  }

  back() {
    if (this.empty() == 1) return -1;
    return this.tail.item;
  }
}

const TESTCASE = input[0];

let queue = new Queue();
let answer = "";

for (let i = 1; i <= TESTCASE; i++) {
  temp = input[i].split(" ");
  if (temp[0] === "push") 
    queue.push(temp[1]);
  else if (temp[0] === "pop") 
    answer += queue.pop() + "\n";
  else if (temp[0] === "size") 
    answer += queue.size() + "\n";
  else if (temp[0] === "empty") 
    answer += queue.empty() + "\n";
  else if (temp[0] === "front") 
    answer += queue.front() + "\n";
  else if (temp[0] === "back") 
    answer += queue.back() + "\n";
}

console.log(answer);
