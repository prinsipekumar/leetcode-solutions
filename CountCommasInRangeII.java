public class CountCommasInRangeII {
    public long countCommas(long n) {
        long ans = 0;
        for (long x = 1000; x <= n; x *= 1000) {
            ans += n - x + 1;
        }
        return ans;
    }
    public static void main(String[] args) {
        CountCommasInRangeII sol = new CountCommasInRangeII();

        long n1 = 1002;
        System.out.println("Commas up to " + n1 + " = " + sol.countCommas(n1)); //3

        long n2 = 998;
        System.out.println("Commas up to " + n2 + " = " + sol.countCommas(n2)); //0

        long n3 = 1234567;
        System.out.println("Commas up to " + n3 + " = " + sol.countCommas(n3)); //1468136
    }
}
