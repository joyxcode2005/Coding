try:
    assert plusOne([1, 2, 3]) == [1, 2, 4]
    assert plusOne([4, 3, 2, 1]) == [4, 3, 2, 2]
    assert plusOne([9]) == [1, 0]
    assert plusOne([0]) == [1]
    assert plusOne([9, 9]) == [1, 0, 0]
    assert plusOne([8, 9, 9]) == [9, 0, 0]
    assert plusOne([1, 9, 9]) == [2, 0, 0]
    assert plusOne([2, 3, 9]) == [2, 4, 0]
    assert plusOne([9, 9, 9, 9]) == [1, 0, 0, 0, 0]
    assert plusOne([1, 2, 9]) == [1, 3, 0]
    assert plusOne([1, 0, 0]) == [1, 0, 1]
    assert plusOne([7, 6, 9]) == [7, 7, 0]
    assert plusOne([2, 9, 9]) == [3, 0, 0]
    assert plusOne([9, 0, 9]) == [9, 1, 0]
    assert plusOne([9, 9, 9]) == [1, 0, 0, 0]
    assert plusOne([5]) == [6]
    assert plusOne([1, 9]) == [2, 0]
    assert plusOne([3, 9, 9]) == [4, 0, 0]
    assert plusOne([1, 0, 0, 0]) == [1, 0, 0, 1]
    assert plusOne([9, 8, 9]) == [9, 9, 0]

    print("ALL_TESTS_PASSED")
except:
    print("FAIL")
