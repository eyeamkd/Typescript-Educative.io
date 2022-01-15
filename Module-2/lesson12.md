# Unions

Typescript gives you the ability to union a type by using the "|" pipe operator 

```
interface unioninzedInterface = interface1 | interface2 | interface3 
```  

Generally, when this approach is used there comes a problem with has to do with narrowing down to the type where it's originated, due to this we use a "discriminant" field to distinguish between the types.  

```  
interface1 { 
    kind:"interface1"
    ...interface1 properties 
} 

interface2 { 
    kind:"interface2"
    ...interface2 properties 
} 

interface3 { 
    kind:"interface3"
    ...interface3 properties 
}

```
Now if there's any problem due to the above interfaces, it very easy for Typescript to narrow down the problem to the interface which is the parent for the variable causing the problem

