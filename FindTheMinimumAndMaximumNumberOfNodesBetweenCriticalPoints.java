public class FindTheMinimumAndMaximumNumberOfNodesBetweenCriticalPoints {
    public int[] nodesBetweenCriticalPoints(ListNode head) {
        int[] result = new int[]{-1, -1};
        
        if (head == null || head.next == null || head.next.next == null) {
            return result;
        }

        int index = 1;
        int firstCritical = -1, lastCritical = -1;
        int minDistance = Integer.MAX_VALUE;

        ListNode prev = head;
        ListNode curr = head.next;

        while (curr.next != null) {
            index++;
            int prevVal = prev.val;
            int currVal = curr.val;
            int nextVal = curr.next.val;

            if ((currVal > prevVal && currVal > nextVal) || 
                (currVal < prevVal && currVal < nextVal)) {
                
                if (firstCritical == -1) {
                    firstCritical = index;
                } else {
                    minDistance = Math.min(minDistance, index - lastCritical);
                }
                lastCritical = index;
            }

            prev = curr;
            curr = curr.next;
        }

        if (firstCritical != -1 && lastCritical != firstCritical) {
            result[0] = minDistance;
            result[1] = lastCritical - firstCritical;
        }

        return result;
    }

    static class ListNode {
        int val;
        ListNode next;
        ListNode() {}
        ListNode(int val) { this.val = val; }
        ListNode(int val, ListNode next) { this.val = val; this.next = next; }
    }

    public static void main(String[] args) {
        ListNode head = new ListNode(1);
        head.next = new ListNode(3);
        head.next.next = new ListNode(2);
        head.next.next.next = new ListNode(2);
        head.next.next.next.next = new ListNode(3);
        head.next.next.next.next.next = new ListNode(2);
        head.next.next.next.next.next.next = new ListNode(2);
        head.next.next.next.next.next.next.next = new ListNode(2);
        head.next.next.next.next.next.next.next.next = new ListNode(7);

        FindTheMinimumAndMaximumNumberOfNodesBetweenCriticalPoints sol = new FindTheMinimumAndMaximumNumberOfNodesBetweenCriticalPoints();
        int[] result = sol.nodesBetweenCriticalPoints(head);

        System.out.println("Minimum Distance: " + result[0]); //3
        System.out.println("Maximum Distance: " + result[1]); //3
    }
}
