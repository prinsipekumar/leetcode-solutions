import java.util.Arrays;

public class DistinctSubsequencesII {
    public int distinctSubseqII(String s) {
        int MOD = 1_000_000_007;
        int n = s.length();
        
        long[] dp = new long[n + 1];
        dp[0] = 1;
        
        int[] last = new int[26];
        Arrays.fill(last, -1);
        
        for (int i = 1; i <= n; i++) {
            int ch = s.charAt(i - 1) - 'a';
            
            dp[i] = (2 * dp[i - 1]) % MOD;
            
            if (last[ch] != -1) {
                dp[i] = (dp[i] - dp[last[ch] - 1] + MOD) % MOD;
            }

            last[ch] = i;
        }

        return (int)((dp[n] - 1 + MOD) % MOD);
    }

    public static void main(String[] args) {
        DistinctSubsequencesII sol = new DistinctSubsequencesII();
        System.out.println(sol.distinctSubseqII("abc")); //7
        System.out.println(sol.distinctSubseqII("aba")); //6
        System.out.println(sol.distinctSubseqII("aaa")); //3
    }
}
