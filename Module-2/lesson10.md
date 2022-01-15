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
Record is just another name for "accumulation", i.e formation of a new type just by accumulation of other **single** type. Something that builds or enforces an input into a type 

*Record cannot be used for multiple types*

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

## Extract Mapped Type 

Extract unlike record, acts as a union between several types. 
Where you can "extract" the common type of properties among different interfaces and formulate a new type on top of it

``` 
interface Animal{
    name:string;
    age:number;
    breed:string
} 

interface Human{
    name:string;
    occupation:string
} 

``` 

Here Animal and Human are two different types, using the property **Extract** we can extract a common type "LivingThing" that shares common properties between these two types 

interface LivingThing = Extract<keyof Animal, keyof Human> 

Now we can enforce this type on a unknown input 

response: LivingThing = Record<LivingThing, string> 

## Exclude Mapped Type 

Exclude does the same thing as Extract only with a small difference, here it removes the elements that were specified instead of looking for common elements 

```
interface Animal {
    name: string;
    gender: string;
    sound: string;
}
interface Human {
    name: string;
    gender: string;
    nickname: string;
}

interface Human2 {
    name: string;
    gender: boolean;
    intelligenceScore: number
}

interface NoisyLivingSpecies{
    sound: string;
}
type LivingThing = Exclude<keyof Animal, keyof NoisyLivingSpecies>;
type HumanWithoutNickname = Pick<Human, LivingThing>;
type HumanWithoutNickname2 = Pick<Human2, LivingThing>; 
``` 
In the example mentioned above, the "LivingThing" type is formed by excluding the common elements across the types Animal and NoisyLivingSpecies.

The type "HumanWithoutNickname" is formed by picking the properties of LivingThing on the global type of "Human", which results in the interface consisting of name and gender 

Same thing as above with the HumanWithoutNickname2 but here there's an additional property of intelligenceScore


## ReturnType Mapped Type 

ReturnType is used on functions. ReturnType extracts the "return type" of a function and the type extracted can then be used as an interface. 

**Example**:
``` 
function Greeting(name:string):string{
    return `Hello, ${name}`; 
} 

type GreetingReturnType = ReturnType<typeof Greeting>

``` 

The GreetingReturnType would be nothing but a string type now 

*For the functions that return values based on condtions, their type is inferred by Typescript* 

**ReturnTypeFromPromise** is used to extract the return type from an asynchronous function, i.e a function that generally returns a Promise<T>, but this operator Mapped type gives the return type after resolving the promise