# Mapped Types

Map types are basically modifiers and extensions that are used on existing interfaces or modify them by extending their capabilities

Example:
``` 
type ReadOnlyInterface<T> =  {
    readonly [P in keyof T]:T[P]
}
```

Useful syntaxes to create the mapped types are Property Keys ( in keyof )

type mappedType<T>{ 
    [Property in keyof T]: <any desired value>
}

type mappedBooleanType<T>{ 
    [Property in keyof T]:boolean
} 

type binaryType<T>{ 
    [Property in keyof T]: 1 | 0
} 

## Usage

someVar : someType;

newType = binaryType<someType> 

 *Mapped types can only be applied on types and the result of applying a mapped type is a type*

## Partial Mapped Type

This Mapped type changes the properties from compulsory to optional

type PartialType<Type>{
    [Property in keyof Type]?:Type[Property]
}

## Nullable Mapped Type

Makes every item of the incoming type to be null

type nullableType<Type>{
    [Property in keyof Type]: Type[Property] | null
} 

## Pick Mapped Type 

Add a selective layer on top of an existing interface so as to "pick" only the properties that are required

**Example**: from a global user object, picking only those that are necessary

**Usage**:
interface GeneralUser{ 
    ...all user objects 
} 

interface userProfileInfo = Pick<GeneralUser, "name"|"age"|"gender"> 


## Omit Mapped Type 

Name is self-explanatory,and opposite of pick, where you "omit" the properties that you don't want. 

The syntax is same as that of Pick type.

**Example**: From a generalUserObject, you omit the password hash before sending it onto the frontend 

**Usage**: 

``` 
interface userObjectWithoutPassword = Omit< User, "passwordHash" | "password" >
``` 
### Record Mapped Type 
Record is just another name for "accumulation", i.e formation of a new type just by accumulation of other types. Something like union 

**Example**:
interface basicUserInfo = Record<"name" |"age"|"gender", string> 

> The above line states that "name", "age", "gender" are property keys which will be a part of the strong type that is being created, and the values that are input for these property keys are of type string

*Keep in mind that the second parameter in the syntax of "Record" is the input type and not the output type* 

**Example2**

```
interface User {
    name:string;
    age:number;
    gender:'M'|'F'|'O'
}

interface strongType = Record<keyof User, string> 
``` 
