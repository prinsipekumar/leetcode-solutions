public class MinimumOperationsToReduceXToZero {
    public int minOperations(int[] nums, int x) {
        int total = 0;
        for (int num : nums) {
            total += num;
        }
        
        int target = total - x;
        if (target < 0) return -1; // impossible case
        
        int n = nums.length;
        int left = 0, currSum = 0, maxLen = -1;
        
        for (int right = 0; right < n; right++) {
            currSum += nums[right];
            
            while (left <= right && currSum > target) {
                currSum -= nums[left++];
            }
            
            if (currSum == target) {
                maxLen = Math.max(maxLen, right - left + 1);
            }
        }
        
        return maxLen == -1 ? -1 : n - maxLen;
    }

    public static void main(String[] args) {
        MinimumOperationsToReduceXToZero solution = new MinimumOperationsToReduceXToZero();
        int[] nums = {1, 1, 4, 2, 3};
        int x = 5;
        System.out.println(solution.minOperations(nums, x)); //2
    }
}