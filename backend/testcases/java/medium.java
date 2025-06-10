public class Main {
    public static void main(String[] args) {
        try {
            MinStack MinStack = new MinStack();
            MinStack.push(-2);de
            MinStack.push(0);
            MinStack.push(-3);

            assert MinStack.getMin() == -3 : "Test 1 Failed";

            MinStack.pop();

            assert MinStack.top() == 0 : "Test 2 Failed";
            assert MinStack.getMin() == -2 : "Test 3 Failed";

            System.out.println("ALL_TESTS_PASSED");
        } catch (AssertionError e) {
            System.out.println("FAIL");
        }
    }
}