# Control Flow Analysis

Control flow analysis is the process by which Typescript infers the type of a particular variable
For example:

let someRandomArray = [1,2,"three"]
then the type of the array inferred by Typescript is "number | string"

if the types are more than three, it gets inferred to any

the type gets inferred after manipulation not during or before, for example

let someRandomArray = [] ---> Type is "any"
someRandomArray.push(1) ---> type is "any"
console.log(someRandomArray) ---->  type is now "number"
because on the step 3 manipulation is done


Typescript has the option "strcitNullChecks" that should be made to true, in order to prevent assigning the variables the values of "null" and "undefined"

## Union

let numberNullOrUndefined: number | null | undefined = 123;

When the type of the variable should be explicitly defined, then typescript developers use "union" operator to determine the type. multiple possible types can be piped together to form union of types

## ? Question mark operator

Question mark ( ? ) operator  can be used to make the variable optional. That is whether the variable is supposed to be passed or not as a part of either a function definiton or as a response

Better practice to use undefined instead of null, as it is natural tendency of JS to lean towards "undefined" as compared to "null" 

Typescript doesn't allow interaction with undefined variables

"strictNullCheck" option makes implicit assignment of null or defined to a variable difficult 

null is used when the data is not actually present, for example a field that is yet to be computed but is already declared in a database 

*void* function allows the code to return undefined 

*never* type is used to explicitly return exceptions, if a function has a return type mentioned of "string" or "void" then the function can return an exception, but if the function has a return type of "never" then it can't return string or void

Therefore, the logical explanation of the type "never" is that it "never" occurs, the value is "never" of this type, hence it falls under an exception thereby making the type never to only return exceptions 

