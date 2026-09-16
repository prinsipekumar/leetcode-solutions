public class NumberOfSetsOfKNonOverlappingLineSegments {
    static final int MOD = 1_000_000_007;
    long[] fact, invFact;

    public int numberOfSets(int n, int k) {
        int size = n + k;
        fact = new long[size + 1];
        invFact = new long[size + 1];
        fact[0] = 1;
        for (int i = 1; i <= size; i++) fact[i] = fact[i - 1] * i % MOD;
        invFact[size] = modInverse(fact[size]);
        for (int i = size - 1; i >= 0; i--) invFact[i] = invFact[i + 1] * (i + 1) % MOD;
        return (int) nCr(n + k - 1, 2 * k);
    }

    long nCr(int n, int r) {
        if (r < 0 || r > n) return 0;
        return fact[n] * invFact[r] % MOD * invFact[n - r] % MOD;
    }

    long modInverse(long x) {
        return pow(x, MOD - 2);
    }

    long pow(long a, long b) {
        long res = 1;
        while (b > 0) {
            if ((b & 1) == 1) res = res * a % MOD;
            a = a * a % MOD;
            b >>= 1;
        }
        return res;
    }

    public static void main(String[] args) {
        NumberOfSetsOfKNonOverlappingLineSegments sol = new NumberOfSetsOfKNonOverlappingLineSegments();
        System.out.println(sol.numberOfSets(5, 2)); //15
    }
}