Casting in Typescript

In Typescript we use "as" keyword to cast the type of a variable

for example:

const variable : number = unknownType as number
 or
const variable : number = <number> unknownType


Casting incompatible types needs double casting, forexample to cast from string to unknown and then from unknown to whatever the type is desired 

const variable : number = (stringVariable as unknown) as number 


