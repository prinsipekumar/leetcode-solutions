public class CountCommasInRange {
    public int countCommas(int n) {
        int result = 0;
        int digits = String.valueOf(n).length();

        for (int d = 4; d <= digits; d++) {
            int commas = (d - 1) / 3;
            int lower = (int) Math.pow(10, d - 1);
            int upper = (int) Math.pow(10, d) - 1;

            int count = Math.max(0, Math.min(n, upper) - lower + 1);

            result += count * commas;
        }
        return result;
    }

    public static void main(String[] args) {
        CountCommasInRange sol = new CountCommasInRange();
        int n = 1002;
        System.out.println("Total commas from 1 to " + n + ": " + sol.countCommas(n)); //3
    }
}