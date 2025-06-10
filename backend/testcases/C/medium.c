
// --- Helper function to check if two integers are equal (for tests) ---

bool intsEqual(int a, int b) {
    return a == b;
}

// --- Test main() ---

int main() {
    bool allTestsPassed = true;

    MinStack* minStack = minStackCreate();

    minStackPush(minStack, -2);
    minStackPush(minStack, 0);
    minStackPush(minStack, -3);

    if (!intsEqual(minStackGetMin(minStack), -3)) {
        allTestsPassed = false;
    }

    minStackPop(minStack);

    if (!intsEqual(minStackTop(minStack), 0)) {
        allTestsPassed = false;
    }

    if (!intsEqual(minStackGetMin(minStack), -2)) {
        allTestsPassed = false;
    }

    minStackFree(minStack);

    if (allTestsPassed) {
        printf("ALL_TESTS_PASSED\n");
    } else {
        printf("FAIL\n");
    }

    return 0;
}
