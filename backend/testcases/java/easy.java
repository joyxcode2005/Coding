public class Main {
    public static void main(String[] args) {
        try {
            int[] result1 = TwoSum.twoSum(new int[]{2, 7, 11, 15}, 9);
            int[] result2 = TwoSum.twoSum(new int[]{3, 2, 4}, 6);
            int[] result3 = TwoSum.twoSum(new int[]{3, 3}, 6);

            assert result1[0] == 0 && result1[1] == 1 : "Test 1 Failed";
            assert result2[0] == 1 && result2[1] == 2 : "Test 2 Failed";
            assert result3[0] == 0 && result3[1] == 1 : "Test 3 Failed";

            System.out.println("ALL_TESTS_PASSED");
        } catch (AssertionError e) {
            System.out.println("FAIL");
        }
    }
}
