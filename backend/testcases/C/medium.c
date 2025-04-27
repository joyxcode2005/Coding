#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>

// --- MinStack definition ---

typedef struct {
    int *data;
    int *minData;
    int topIndex;
    int capacity;
} MinStack;

MinStack* minStackCreate() {
    MinStack* stack = (MinStack*)malloc(sizeof(MinStack));
    stack->capacity = 10000; // enough for 3 * 10^4 calls
    stack->data = (int*)malloc(sizeof(int) * stack->capacity);
    stack->minData = (int*)malloc(sizeof(int) * stack->capacity);
    stack->topIndex = -1;
    return stack;
}

void minStackPush(MinStack* obj, int val) {
    obj->topIndex++;
    obj->data[obj->topIndex] = val;
    if (obj->topIndex == 0) {
        obj->minData[obj->topIndex] = val;
    } else {
        int currentMin = obj->minData[obj->topIndex - 1];
        obj->minData[obj->topIndex] = val < currentMin ? val : currentMin;
    }
}

void minStackPop(MinStack* obj) {
    if (obj->topIndex >= 0) {
        obj->topIndex--;
    }
}

int minStackTop(MinStack* obj) {
    return obj->data[obj->topIndex];
}

int minStackGetMin(MinStack* obj) {
    return obj->minData[obj->topIndex];
}

void minStackFree(MinStack* obj) {
    free(obj->data);
    free(obj->minData);
    free(obj);
}

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