public class Main {
    public static void main(String[] args) {
        try {
            assert java.util.Arrays.equals(PlusOne.plusOne(new int[]{1, 2, 3}), new int[]{1, 2, 4});
            assert java.util.Arrays.equals(PlusOne.plusOne(new int[]{4, 3, 2, 1}), new int[]{4, 3, 2, 2});
            assert java.util.Arrays.equals(PlusOne.plusOne(new int[]{9}), new int[]{1, 0});
            assert java.util.Arrays.equals(PlusOne.plusOne(new int[]{0}), new int[]{1});
            assert java.util.Arrays.equals(PlusOne.plusOne(new int[]{9, 9}), new int[]{1, 0, 0});
            assert java.util.Arrays.equals(PlusOne.plusOne(new int[]{8, 9, 9}), new int[]{9, 0, 0});
            assert java.util.Arrays.equals(PlusOne.plusOne(new int[]{1, 9, 9}), new int[]{2, 0, 0});
            assert java.util.Arrays.equals(PlusOne.plusOne(new int[]{2, 3, 9}), new int[]{2, 4, 0});
            assert java.util.Arrays.equals(PlusOne.plusOne(new int[]{9, 9, 9, 9}), new int[]{1, 0, 0, 0, 0});
            assert java.util.Arrays.equals(PlusOne.plusOne(new int[]{1, 2, 9}), new int[]{1, 3, 0});
            assert java.util.Arrays.equals(PlusOne.plusOne(new int[]{1, 0, 0}), new int[]{1, 0, 1});
            assert java.util.Arrays.equals(PlusOne.plusOne(new int[]{7, 6, 9}), new int[]{7, 7, 0});
            assert java.util.Arrays.equals(PlusOne.plusOne(new int[]{2, 9, 9}), new int[]{3, 0, 0});
            assert java.util.Arrays.equals(PlusOne.plusOne(new int[]{9, 0, 9}), new int[]{9, 1, 0});
            assert java.util.Arrays.equals(PlusOne.plusOne(new int[]{9, 9, 9}), new int[]{1, 0, 0, 0});
            assert java.util.Arrays.equals(PlusOne.plusOne(new int[]{5}), new int[]{6});
            assert java.util.Arrays.equals(PlusOne.plusOne(new int[]{1, 9}), new int[]{2, 0});
            assert java.util.Arrays.equals(PlusOne.plusOne(new int[]{3, 9, 9}), new int[]{4, 0, 0});
            assert java.util.Arrays.equals(PlusOne.plusOne(new int[]{1, 0, 0, 0}), new int[]{1, 0, 0, 1});
            assert java.util.Arrays.equals(PlusOne.plusOne(new int[]{9, 8, 9}), new int[]{9, 9, 0});
            
            System.out.println("ALL_TESTS_PASSED");
        } catch (AssertionError e) {
            System.out.println("FAIL");
        }
    }
}
