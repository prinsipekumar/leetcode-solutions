public class FindXValueArrayI {
    public static long[] resultArray(int[] nums, int k) {
        long[] ans = new long[k];
        long[] dp = new long[k];
        for (int num : nums) {
            long[] newDp = new long[k];
            int numMod = num % k;
            newDp[numMod]++;
            for (int i = 0; i < k; i++) {
                if (dp[i] > 0) {
                    int newMod = (int)((1L * i * numMod) % k);
                    newDp[newMod] += dp[i];
                }
            }
            for (int i = 0; i < k; i++) ans[i] += newDp[i];
            dp = newDp;
        }
        return ans;
    }

    public static void main(String[] args) {
        int[] nums = {1,2,3,4,5};
        int k = 3;
        long[] res = resultArray(nums, k);
        for (long val : res) System.out.print(val + " ");
    }
}