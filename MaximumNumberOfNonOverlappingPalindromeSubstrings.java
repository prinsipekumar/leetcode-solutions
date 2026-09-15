class MaximumNumberOfNonOverlappingPalindromeSubstrings {
    public int maxPalindromes(String s, int k) {
        int n = s.length();
        boolean[][] isPal = new boolean[n][n];

        for (int len = 1; len <= n; len++) {
            for (int i = 0; i + len - 1 < n; i++) {
                int j = i + len - 1;
                if (s.charAt(i) == s.charAt(j)) {
                    if (len <= 2) {
                        isPal[i][j] = true;
                    } else {
                        isPal[i][j] = isPal[i + 1][j - 1];
                    }
                }
            }
        }

        int[] dp = new int[n + 1];
        for (int i = 1; i <= n; i++) {
            dp[i] = dp[i - 1];
            for (int j = i - k; j >= 0; j--) {
                if (isPal[j][i - 1] && i - j >= k) {
                    dp[i] = Math.max(dp[i], dp[j] + 1);
                    break;
                }
            }
        }
        return dp[n];
    }

    public static void main(String[] args) {
        MaximumNumberOfNonOverlappingPalindromeSubstrings sol = new MaximumNumberOfNonOverlappingPalindromeSubstrings();
        System.out.println(sol.maxPalindromes("abaccdbbd", 3)); //2
    }
}