

public class Main {
    public static boolean listsEqual(List<String> list1, List<String> list2) {
        return new HashSet<>(list1).equals(new HashSet<>(list2));
    }

    public static void main(String[] args) {
        try {
            WordBreak wb = new WordBreak(); // ✅ Create an instance

            List<String> result1 = wb.wordBreak("catsanddog", Arrays.asList("cat", "cats", "and", "sand", "dog"));
            List<String> expected1 = Arrays.asList("cats and dog", "cat sand dog");

            List<String> result2 = wb.wordBreak("pineapplepenapple", Arrays.asList("apple", "pen", "applepen", "pine", "pineapple"));
            List<String> expected2 = Arrays.asList("pine apple pen apple", "pineapple pen apple", "pine applepen apple");

            List<String> result3 = wb.wordBreak("catsandog", Arrays.asList("cats", "dog", "sand", "and", "cat"));
            List<String> expected3 = Collections.emptyList();

            assert listsEqual(result1, expected1) : "Test 1 Failed";
            assert listsEqual(result2, expected2) : "Test 2 Failed";
            assert listsEqual(result3, expected3) : "Test 3 Failed";

            System.out.println("ALL_TESTS_PASSED");
        } catch (AssertionError e) {
            System.out.println("FAIL");
        }
    }
}
