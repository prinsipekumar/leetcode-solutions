import java.util.HashSet;

class ContainsDuplicate {
    public boolean containsDuplicate(int[] nums) {
        HashSet<Integer> set = new HashSet<>();
        for (int num : nums) {
            if (set.contains(num)) return true;
            set.add(num);
        }
        return false;
    }

    public static void main(String[] args) {
        ContainsDuplicate sol = new ContainsDuplicate();
        int[] nums = {1, 2, 3, 1};
        System.out.println(sol.containsDuplicate(nums)); //true
    }
}