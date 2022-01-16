# Mutable vs Immutable types 

Mutable are those that can be assigned to other values.
For example: 

``` 
let mutableVariable = 34;

mutableVariable = 44;
``` 
Whereas immutable variables are the ones that cannot change 

``` 
const immutableVariable = 34;

immutableVariable = 44; //throws error 
``` 

What if you need an mutable type like array or object, but want to make it immutable?

``` 
let gender = ['M','F', 'O'] as const 
``` 
now the variable "gender" doesn't have the property of "push" in it, that means you cannot push the values to it and it acts as a readonly source of data 

Other way of writing it is 

```
let gender : readonly ['M', 'F', 'O'] = ['M', 'F', 'O'] 
```
Which has code duplication, and is not recommended.

The best part about the "as const" property is the partial nature of it. Which means you get to partially assign a peice of object as a constant 

``` 
const object = { 
    "key1":"value1",
    "key2":"value2" as const,  
    .
    .
    .
    .
    .
    "keyN":"valueN"
}
``` 
Now that means, the other keys can be modified except key2