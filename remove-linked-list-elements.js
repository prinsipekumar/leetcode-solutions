var removeElements = function (head, val) {
    const dummy = new ListNode(0);
    dummy.next = head;

    let curr = dummy;

    while (curr.next) {
        if (curr.next.val === val) {
            curr.next = curr.next.next;
        } else {
            curr = curr.next;
        }
    }

    return dummy.next;
};

const head = {
    val: 1,
    next: {
        val: 2,
        next: {
            val: 6,
            next: {
                val: 3,
                next: {
                    val: 4,
                    next: {
                        val: 5,
                        next: {
                            val: 6,
                            next: null
                        }
                    }
                }
            }
        }
    }
};

function ListNode(val, next = null) {
    this.val = val;
    this.next = next;
}

console.log(removeElements(head, 6));  // 1 -> 2 -> 3 -> 4 -> 5
