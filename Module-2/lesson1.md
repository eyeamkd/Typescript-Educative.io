# Variables 

## Disadvantages of Var 

1. Not scoped: A var variable is function scoped when declared inside a function and global scoped when declared outside a function 
2. Re-Declaration: A var variable can be redeclared or reinitialized without causing any error 


"noEmitOnError" feature blocks the Typescript to create JS files on occurance of any error. 

## Declaring variables with "let" 

1. let variables are block scoped, that means that they are not accessible outside the function/class/loop in which they're declared  
   *important*
2. Subsequent var variable declarations must have the same type, but this is not true for let 

```function varLetFunction(){
    var myStringValue = "varStringValue";
    let myStringValueLet = "letStringValue";
    if(true){
        var myStringValue = 123;
        let myStringValueLet = 12345;
    }
}
```  
in the above example, "myStringValue" which is declared is of the type string, and then it is re-declared to have the type of number. As it is a "var" variable, the type has to remain same and this code throws an error. 

## Declaring Variables with "const" 

1. const prevents re-declaration of the varible, and re-assignment if the variable is of immutable type 

Typescript has the ability to infer the type of a variable dynamically, without explicit declaration 
