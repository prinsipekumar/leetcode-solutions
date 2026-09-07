public class Sqrt {
    public int mySqrt(int x) {
        if (x < 2) return x;

        int left = 1, right = x / 2;
        int ans = 0;

        while (left <= right) {
            int mid = left + (right - left) / 2;
            long sq = (long) mid * mid;

            if (sq == x) {
                return mid;
            } else if (sq < x) {
                ans = mid;
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        return ans;
    }
    public static void main(String[] args) {
        Sqrt sol = new Sqrt();

        System.out.println(sol.mySqrt(0));   //0
        System.out.println(sol.mySqrt(1));   //1
        System.out.println(sol.mySqrt(4));   //2
        System.out.println(sol.mySqrt(8));   //2
        System.out.println(sol.mySqrt(16));  //4
        System.out.println(sol.mySqrt(2147395599)); //46339
    }
}