# Hoisting 

```
x = "not declared before assignment"; 
var x = "declared after assignment  and all fine"; 
console.log(x)
```  
The way JS executes is that, it hoists the variables, that is irrespective of where the variable is declared and defined, JS hoists the variables to the top.  in this way 

``` 
var x;
x = "not declared before assignment"; 
x = "declared after assignment  and all fine"; 
console.log(x)
```  
This weird feature, needless to say leads to a lot ambiguity in code readability, hence with the inception of let and const it is now mandatory to declare the variable before using it. 