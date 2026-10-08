function ListNode(val) {
  this.val = val;
  this.next = null;
}

var hasCycle = function (head) {
  if (!head || !head.next) return false;
  let slow = head;
  let fast = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) return true;
  }
  return false;
};

function createCycle() {
  let node1 = new ListNode(3);
  let node2 = new ListNode(2);
  let node3 = new ListNode(0);
  let node4 = new ListNode(-4);
  node1.next = node2;
  node2.next = node3;
  node3.next = node4;
  node4.next = node2;
  return node1;
}

let head = createCycle();
console.log(hasCycle(head)); //true

let a = new ListNode(1);
let b = new ListNode(2);
a.next = b;
console.log(hasCycle(a)); //false
