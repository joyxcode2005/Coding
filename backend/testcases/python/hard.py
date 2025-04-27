def wordBreak(s, wordDict):
    word_set = set(wordDict)
    memo = {}

    def dfs(s):
        if s in memo:
            return memo[s]
        if not s:
            return [""]

        res = []
        for word in word_set:
            if s.startswith(word):
                sublist = dfs(s[len(word):])
                for sub in sublist:
                    if sub:
                        res.append(word + " " + sub)
                    else:
                        res.append(word)
        memo[s] = res
        return res

    return dfs(s)

# Test cases for wordBreak
try:
    result1 = wordBreak("catsanddog", ["cat","cats","and","sand","dog"])
    result2 = wordBreak("pineapplepenapple", ["apple","pen","applepen","pine","pineapple"])
    result3 = wordBreak("catsandog", ["cats","dog","sand","and","cat"])

    assert sorted(result1) == sorted(["cats and dog", "cat sand dog"])
    assert sorted(result2) == sorted(["pine apple pen apple", "pineapple pen apple", "pine applepen apple"])
    assert sorted(result3) == sorted([])

    print("ALL_TESTS_PASSED")
except:
    print("FAIL")