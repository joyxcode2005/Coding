

// Function to compare arrays
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
  bool all_passed = true;

  struct
  {
    int input[100];
    int inputSize;
    int expected[101];
    int expectedSize;
  } testCases[] = {
      {{1, 2, 3}, 3, {1, 2, 4}, 3},
      {{4, 3, 2, 1}, 4, {4, 3, 2, 2}, 4},
      {{9}, 1, {1, 0}, 2},
      {{0}, 1, {1}, 1},
      {{9, 9}, 2, {1, 0, 0}, 3},
      {{8, 9, 9}, 3, {9, 0, 0}, 3},
      {{1, 9, 9}, 3, {2, 0, 0}, 3},
      {{2, 3, 9}, 3, {2, 4, 0}, 3},
      {{9, 9, 9, 9}, 4, {1, 0, 0, 0, 0}, 5},
      {{1, 2, 9}, 3, {1, 3, 0}, 3},
      {{1, 0, 0}, 3, {1, 0, 1}, 3},
      {{7, 6, 9}, 3, {7, 7, 0}, 3},
      {{2, 9, 9}, 3, {3, 0, 0}, 3},
      {{9, 0, 9}, 3, {9, 1, 0}, 3},
      {{9, 9, 9}, 3, {1, 0, 0, 0}, 4},
      {{5}, 1, {6}, 1},
      {{1, 9}, 2, {2, 0}, 2},
      {{3, 9, 9}, 3, {4, 0, 0}, 3},
      {{1, 0, 0, 0}, 4, {1, 0, 0, 1}, 4},
      {{9, 8, 9}, 3, {9, 9, 0}, 3}};

  int numTests = sizeof(testCases) / sizeof(testCases[0]);

  for (int i = 0; i < numTests; i++)
  {
    int *result = plusOne(testCases[i].input, testCases[i].inputSize, &size);

    if (!(size == testCases[i].expectedSize && arraysEqual(result, testCases[i].expected, size)))
    {
      all_passed = false;
      printf("Test %d FAILED\n", i + 1);
    }

    // ✅ Only free result if it was dynamically allocated
    if (result != testCases[i].input)
    {
      free(result);
    }
  }

  printf("%s\n", all_passed ? "ALL_TESTS_PASSED" : "FAIL");
  return 0;
}
