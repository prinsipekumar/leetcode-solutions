public class ShortestAndLexicographicallySmallestBeautifulString {
    public String shortestBeautifulSubstring(String s, int k) {
        int n = s.length();
        String ans = "";
        
        for (int i = 0; i < n; i++) {
            int count = 0;
            for (int j = i; j < n; j++) {
                if (s.charAt(j) == '1') {
                    count++;
                }
                if (count == k) {
                    String candidate = s.substring(i, j + 1);
                    if (ans.isEmpty() || candidate.length() < ans.length() ||
                        (candidate.length() == ans.length() && candidate.compareTo(ans) < 0)) {
                        ans = candidate;
                    }
                    break;
                }
            }
        }
        return ans;
    }
    public static void main(String[] args) {
        ShortestAndLexicographicallySmallestBeautifulString sol = new ShortestAndLexicographicallySmallestBeautifulString();
        System.out.println(sol.shortestBeautifulSubstring("100011001", 3)); //"11001"
        System.out.println(sol.shortestBeautifulSubstring("1011", 2)); //"11"
        System.out.println(sol.shortestBeautifulSubstring("000", 1)); //""
    }
}
