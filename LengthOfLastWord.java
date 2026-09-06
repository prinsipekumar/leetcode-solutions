public class LengthOfLastWord {
    public static int lengthOfLastWord(String s) {
        int i = s.length() - 1;
        int length = 0;
        while (i >= 0 && s.charAt(i) == ' ') {
            i--;
        }
        while (i >= 0 && s.charAt(i) != ' ') {
            length++;
            i--;
        }
        return length;
    }
    public static void main(String[] args) {
        String s = "Hello World   ";
        System.out.println("Length of last word: " + lengthOfLastWord(s)); //5
    }
}