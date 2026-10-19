class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

function getIntersectionNode(headA, headB) {
  let pA = headA;
  let pB = headB;

  while (pA !== pB) {
    pA = pA === null ? headB : pA.next;
    pB = pB === null ? headA : pB.next;
  }

  return pA;
}

const common = new ListNode(8);
common.next = new ListNode(4);
common.next.next = new ListNode(5);

// List A: 4 -> 1 -> 8 -> 4 -> 5
const headA = new ListNode(4);
headA.next = new ListNode(1);
headA.next.next = common;

// List B: 5 -> 6 -> 1 -> 8 -> 4 -> 5
const headB = new ListNode(5);
headB.next = new ListNode(6);
headB.next.next = new ListNode(1);
headB.next.next.next = common;

const intersection = getIntersectionNode(headA, headB);

console.log(
  intersection
    ? `Intersection Node Value: ${intersection.val}`
    : "No Intersection",
); // Intersection Node Value: 8
