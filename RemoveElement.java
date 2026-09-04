public class RemoveElement {
    public int removeElement(int[] nums, int val) {
        int pos = 0;
        for (int i = 0; i < nums.length; i++) {
            if (nums[i] != val) {
                nums[pos] = nums[i];
                pos++;
            }
        }
        return pos;
    }
    public static void main(String[] args) {
        RemoveElement sol = new RemoveElement();

        int[] nums1 = {3, 2, 2, 3};
        int val1 = 3;
        int len1 = sol.removeElement(nums1, val1);
        System.out.println("New length: " + len1); //2
        for (int i = 0; i < len1; i++) {
            System.out.print(nums1[i] + " "); //2 2
        }
        System.out.println();

        int[] nums2 = {0, 1, 2, 2, 3, 0, 4, 2};
        int val2 = 2;
        int len2 = sol.removeElement(nums2, val2);
        System.out.println("New length: " + len2); //5
        for (int i = 0; i < len2; i++) {
            System.out.print(nums2[i] + " "); //0 1 3 0 4
        }
        System.out.println();
    }
}
