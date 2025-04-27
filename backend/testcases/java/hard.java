import java.util.*;

class WordBreak {
    public static List<String> wordBreak(String s, List<String> wordDict) {
        Set<String> wordSet = new HashSet<>(wordDict);
        Map<String, List<String>> memo = new HashMap<>();
        return backtrack(s, wordSet, memo);
    }

    private static List<String> backtrack(String s, Set<String> wordSet, Map<String, List<String>> memo) {
        if (memo.containsKey(s)) {
            return memo.get(s);
        }

        List<String> result = new ArrayList<>();
        if (s.isEmpty()) {
            result.add("");
            return result;
        }

        for (String word : wordSet) {
            if (s.startsWith(word)) {
                List<String> subSentences = backtrack(s.substring(word.length()), wordSet, memo);
                for (String sub : subSentences) {
                    String space = sub.isEmpty() ? "" : " ";
                    result.add(word + space + sub);
                }
            }
        }

        memo.put(s, result);
        return result;
    }
}

public class Main {
    private static boolean listsEqual(List<String> list1, List<String> list2) {
        return new HashSet<>(list1).equals(new HashSet<>(list2));
    }

    public static void main(String[] args) {
        try {
            List<String> result1 = WordBreak.wordBreak("catsanddog", Arrays.asList("cat", "cats", "and", "sand", "dog"));
            List<String> expected1 = Arrays.asList("cats and dog", "cat sand dog");

            List<String> result2 = WordBreak.wordBreak("pineapplepenapple", Arrays.asList("apple", "pen", "applepen", "pine", "pineapple"));
            List<String> expected2 = Arrays.asList("pine apple pen apple", "pineapple pen apple", "pine applepen apple");

            List<String> result3 = WordBreak.wordBreak("catsandog", Arrays.asList("cats", "dog", "sand", "and", "cat"));
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