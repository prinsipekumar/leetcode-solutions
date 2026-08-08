import java.util.*;

public class FindTheLexicographicallySmallestValidSequence {

    static class Solution {
        public int[] validSequence(String word1, String word2) {
            char[] c1 = word1.toCharArray();
            char[] c2 = word2.toCharArray();
            int n = c1.length, m = c2.length;

            int[] dp = new int[n + 1];
            int j = m - 1;
            for (int i = n - 1; i >= 0; i--) {
                if (j >= 0 && c1[i] == c2[j]) {
                    dp[i] = dp[i + 1] + 1;
                    j--;
                } else {
                    dp[i] = dp[i + 1];
                }
            }

            int[] ans = new int[m];
            int i = 0; j = 0;
            while (i < n && j < m) {
                if (c1[i] == c2[j]) {
                    ans[j] = i;
                    j++;
                } else {
                    if (dp[i + 1] >= m - 1 - j) {
                        ans[j] = i;
                        j++;
                        i++;
                        break;
                    }
                }
                i++;
            }

            if (j < m && i == n) return new int[0];

            while (j < m && i < n) {
                if (c2[j] == c1[i]) {
                    ans[j] = i;
                    j++;
                }
                i++;
            }

            return (j == m) ? ans : new int[0];
        }
    }

    public static void main(String[] args) {
        Solution sol = new Solution();

        String word1 = "vbcca";
        String word2 = "abc";

        int[] result = sol.validSequence(word1, word2);

        if (result.length == 0) {
            System.out.println("No valid sequence found.");
        } else {
            System.out.println("Valid sequence indices: " + Arrays.toString(result));
        }
    }
}

