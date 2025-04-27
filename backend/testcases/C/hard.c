#include<stdio.h>
#include<stdlib.h>
#include<string.h>
#include<stdbool.h>

// Structure to store a list of sentences
typedef struct {
    char **sentences;
    int size;
    int capacity;
} ResultList;

void initResultList(ResultList *list) {
    list->capacity = 100;
    list->size = 0;
    list->sentences = (char **)malloc(list->capacity * sizeof(char *));
}

void addSentence(ResultList *list, const char *sentence) {
    if (list->size == list->capacity) {
        list->capacity *= 2;
        list->sentences = (char **)realloc(list->sentences, list->capacity * sizeof(char *));
    }
    list->sentences[list->size++] = strdup(sentence);
}

void freeResultList(ResultList *list) {
    for (int i = 0; i < list->size; i++) {
        free(list->sentences[i]);
    }
    free(list->sentences);
}

// Helper function to check if a word exists in the dictionary
bool existsInDict(char **wordDict, int wordDictSize, const char *word) {
    for (int i = 0; i < wordDictSize; i++) {
        if (strcmp(wordDict[i], word) == 0)
            return true;
    }
    return false;
}

void dfs(char *s, char **wordDict, int wordDictSize, char *path, ResultList *result) {
    if (*s == '\0') {
        addSentence(result, path);
        return;
    }
    
    for (int i = 1; s[i-1] != '\0'; i++) {
        char prefix[21];
        strncpy(prefix, s, i);
        prefix[i] = '\0';
        if (existsInDict(wordDict, wordDictSize, prefix)) {
            char newPath[300];
            if (strlen(path) > 0)
                sprintf(newPath, "%s %s", path, prefix);
            else
                sprintf(newPath, "%s", prefix);
            dfs(s + i, wordDict, wordDictSize, newPath, result);
        }
    }
}

// User's function
ResultList wordBreak(char *s, char **wordDict, int wordDictSize) {
    ResultList result;
    initResultList(&result);
    dfs(s, wordDict, wordDictSize, "", &result);
    return result;
}

// Helper function to check if two arrays of strings are equal (ignoring order)
bool arraysEqual(char **a, int sizeA, char **b, int sizeB) {
    if (sizeA != sizeB) return false;
    bool matched[sizeA];
    memset(matched, 0, sizeof(matched));
    for (int i = 0; i < sizeA; i++) {
        bool found = false;
        for (int j = 0; j < sizeB; j++) {
            if (!matched[j] && strcmp(a[i], b[j]) == 0) {
                matched[j] = true;
                found = true;
                break;
            }
        }
        if (!found)
            return false;
    }
    return true;
}

int main() {
    // Test 1
    char *wordDict1[] = {"cat", "cats", "and", "sand", "dog"};
    ResultList res1 = wordBreak("catsanddog", wordDict1, 5);
    char *expected1[] = {"cats and dog", "cat sand dog"};

    // Test 2
    char *wordDict2[] = {"apple", "pen", "applepen", "pine", "pineapple"};
    ResultList res2 = wordBreak("pineapplepenapple", wordDict2, 5);
    char *expected2[] = {"pine apple pen apple", "pineapple pen apple", "pine applepen apple"};

    // Test 3
    char *wordDict3[] = {"cats", "dog", "sand", "and", "cat"};
    ResultList res3 = wordBreak("catsandog", wordDict3, 5);
    char *expected3[] = {}; // empty

    bool test1 = arraysEqual(res1.sentences, res1.size, expected1, 2);
    bool test2 = arraysEqual(res2.sentences, res2.size, expected2, 3);
    bool test3 = arraysEqual(res3.sentences, res3.size, expected3, 0);

    if (test1 && test2 && test3) {
        printf("ALL_TESTS_PASSED\n");
    } else {
        printf("FAIL\n");
    }

    freeResultList(&res1);
    freeResultList(&res2);
    freeResultList(&res3);
    return 0;
}