from solution import twoSum


def assert_equal(actual, expected):
    assert sorted(actual) == sorted(expected), f"Expected {expected}, got {actual}"


def run_tests():
    assert_equal(twoSum([2, 7, 11, 15], 9), [0, 1])
    assert_equal(twoSum([3, 2, 4], 6), [1, 2])
    assert_equal(twoSum([3, 3], 6), [0, 1])
    print("ALL_TESTS_PASSED")


run_tests()
