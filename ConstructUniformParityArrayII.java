public class ConstructUniformParityArrayII {
    public boolean uniformArray(int[] nums1) {
        final int INF = Integer.MAX_VALUE;
        int minOdd = INF;

        for (int x : nums1) {
            if (x % 2 == 1) {
                minOdd = Math.min(minOdd, x);
            }
        }

        for (int x : nums1) {
            if (x % 2 == 0 && minOdd != INF && x < minOdd) {
                return false;
            }
        }

        return true;
    }

    public static void main(String[] args) {
        ConstructUniformParityArrayII sol = new ConstructUniformParityArrayII();

        int[] nums1 = {1, 4, 7};
        System.out.println(sol.uniformArray(nums1)); //true

        int[] nums2 = {2, 3};
        System.out.println(sol.uniformArray(nums2)); //false

        int[] nums3 = {4, 6};
        System.out.println(sol.uniformArray(nums3)); //true
    }
}
