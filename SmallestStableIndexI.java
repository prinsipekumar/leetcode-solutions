public class SmallestStableIndexI {
    public int firstStableIndex(int[] nums, int k) {
        int n = nums.length;
        int[] suffixMin = new int[n];
        
        suffixMin[n - 1] = nums[n - 1];
        for (int i = n - 2; i >= 0; i--) {
            suffixMin[i] = Math.min(nums[i], suffixMin[i + 1]);
        }
        
        int prefixMax = Integer.MIN_VALUE;
        for (int i = 0; i < n; i++) {
            prefixMax = Math.max(prefixMax, nums[i]);
            int instability = prefixMax - suffixMin[i];
            if (instability <= k) {
                return i;
            }
        }
        
        return -1;
    }

    public static void main(String[] args) {
        SmallestStableIndexI sol = new SmallestStableIndexI();
        
        int[] nums1 = {5, 0, 1, 4};
        int k1 = 3;
        System.out.println(sol.firstStableIndex(nums1, k1)); //3

        int[] nums2 = {3, 2, 1};
        int k2 = 1;
        System.out.println(sol.firstStableIndex(nums2, k2)); //-1

        int[] nums3 = {0};
        int k3 = 0;
        System.out.println(sol.firstStableIndex(nums3, k3)); //0
    }
}
