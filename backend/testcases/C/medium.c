

// Function to be tested
int lengthOfLongestSubstring(char *s);

// Test runner
int main()
{
    bool all_passed = true;

    struct
    {
        char input[100];
        int expected;
    } testCases[] = {
        {"abcabcbb", 3},
        {"bbbbb", 1},
        {"pwwkew", 3},
        {"", 0},
        {"abcdef", 6},
        {"aab", 2},
        {"dvdf", 3},
        {"abba", 2},
        {"tmmzuxt", 5},
        {"anviaj", 5},
        {"abcadef", 5},
        {"a", 1},
        {"aa", 1},
        {"ab", 2},
        {"aba", 2},
        {"abccba", 3},
        {"abcdefghijk", 11},
        {"abcabcabcd", 4},
        {"bbtablud", 6},
        {"pwwkewpwwkew", 3}
    };

    int num_tests = sizeof(testCases) / sizeof(testCases[0]);

    for (int i = 0; i < num_tests; i++)
    {
        int result = lengthOfLongestSubstring(testCases[i].input);
        if (result != testCases[i].expected)
        {
            all_passed = false;
            printf("Test %d failed: input=\"%s\", expected=%d, got=%d\n", i + 1, testCases[i].input, testCases[i].expected, result);
        }
    }

    printf("%s\n", all_passed ? "ALL_TESTS_PASSED" : "FAIL");
    return 0;
}
