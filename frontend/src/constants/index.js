export const languageOptions = [
  { name: "C", id: 50, monaco: "c" },
  { name: "Java", id: 62, monaco: "java" },
  { name: "Python", id: 71, monaco: "python" },
];

export const passwords = {
  EASY: import.meta.env.VITE_EASYROUND_PASSWORD,
  MEDIUM: import.meta.env.VITE_MEDIUMROUND_PASSWORD,
  HARD: import.meta.env.VITE_HARDROUND_PASSWORD,
};

export const easyJavaBoilerPlate = `// Write your code here\nclass PlusOne {\n  public static int[] plusOne(int[] digits) {\n\n\t}\n}`;

export const easyCBoilerPlate =
  "// Write your code here\n#include <stdio.h>\n#include <stdlib.h>\n#include <stdbool.h>\n#include <string.h>\n\nint* plusOne(int* digits, int digitsSize, int* returnSize){}";

export const easyPythonBoilerPlate = `# Write your code here\ndef plusOne(digits):`;

export const mediumPythonBoilerPlate = `
# Write your code here
class MinStack(object):
    def __init__(self):  
        pass

    def push(self, x):  
        pass

    def pop(self):  
        pass

    def top(self):  
        pass

    def getMin(self):  
        pass

`;

export const mediumJavaBoilerPlate = `// Write your code here

import java.util.*;

class MinStack {

    public MinStack() {
        
    }
    
    public void push(int val) {
        
    }
    
    public void pop() {
        
    }
    
    public int top() {
        
    }
    
    public int getMin() {
        
    }
}
`;

export const mediumCBoilerPlate = `// Write your code here

#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>
#include <string.h>

typedef struct {
    
} MinStack;


MinStack* minStackCreate() {
    
}

void minStackPush(MinStack* obj, int val) {
    
}

void minStackPop(MinStack* obj) {
    
}

int minStackTop(MinStack* obj) {
    
}

int minStackGetMin(MinStack* obj) {
    
}

void minStackFree(MinStack* obj) {
    
}
`;

export const hardJavaBoilerPlate = `// Write your code here
import java.util.*;
class WordBreak {
    public List<String> wordBreak(String s, List<String> wordDict) {
        
    }
}
`;

export const hardCBoilerPlate = `// Write your code here

#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>
#include <string.h>

char** wordBreak(char* s, char** wordDict, int wordDictSize, int* returnSize) {
    
}
`

export const hardPythonBoilerPlate = `#Write you code here 

def wordBreak(self, s, wordDict):`
