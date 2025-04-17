#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>
#include <string.h>

bool arraysEqual(int* a, int* b, int size) {
  for (int i = 0; i < size; i++) {
      if (a[i] != b[i])
          return false;
  }
  return true;
}

// Forward declaration of user's function
int *twoSum(int *nums, int numsSize, int target, int *returnSize);

bool arraysEqual(int *a, int *b, int size)
{
  for (int i = 0; i < size; i++)
  {
    if (a[i] != b[i])
      return false;
  }
  return true;
}

int main()
{
  int size;

  int nums1[] = {2, 7, 11, 15};
  int *result1 = twoSum(nums1, 4, 9, &size);
  int expected1[] = {0, 1};

  int nums2[] = {3, 2, 4};
  int *result2 = twoSum(nums2, 3, 6, &size);
  int expected2[] = {1, 2};

  int nums3[] = {3, 3};
  int *result3 = twoSum(nums3, 2, 6, &size);
  int expected3[] = {0, 1};

  if (
      arraysEqual(result1, expected1, 2) &&
      arraysEqual(result2, expected2, 2) &&
      arraysEqual(result3, expected3, 2))
  {
    printf("ALL_TESTS_PASSED\n");
  }
  else
  {
    printf("FAIL\n");
  }

  free(result1);
  free(result2);
  free(result3);
  return 0;
}
