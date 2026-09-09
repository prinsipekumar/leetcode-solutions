public class MergeSortedArray {
    public void merge(int[] nums1, int m, int[] nums2, int n) {
        int p1 = m - 1;
        int p2 = n - 1;
        int p = m + n - 1;

        while (p1 >= 0 && p2 >= 0) {
            if (nums1[p1] > nums2[p2]) {
                nums1[p] = nums1[p1];
                p1--;
            } else {
                nums1[p] = nums2[p2];
                p2--;
            }
            p--;
        }

        while (p2 >= 0) {
            nums1[p] = nums2[p2];
            p2--;
            p--;
        }
    }

    public static void main(String[] args) {
        MergeSortedArray sol = new MergeSortedArray();
        int[] nums1 = {1,2,3,0,0,0};
        int[] nums2 = {2,5,6};
        sol.merge(nums1, 3, nums2, 3);

        System.out.print("Merged array: ");
        for (int num : nums1) {
            System.out.print(num + " "); //1 2 2 3 5 6
        }
    }
}