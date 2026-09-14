import java.util.*;

public class PascalsTriangleII {
    public List<Integer> getRow(int rowIndex) {
        List<Integer> row = new ArrayList<>();
        row.add(1);
        for (int i = 1; i <= rowIndex; i++) {
            row.add(0);
            for (int j = i; j > 0; j--) {
                row.set(j, row.get(j) + row.get(j - 1));
            }
        }
        return row;
    }

    public static void main(String[] args) {
        PascalsTriangleII pt2 = new PascalsTriangleII();
        System.out.println(pt2.getRow(4)); //[1, 4, 6, 4, 1]
    }
}