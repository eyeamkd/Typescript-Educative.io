# Advanced Variables 

Intersection: & 

Intersection acts like a union, where it combines two types to behave like one single one 

type one{
    ...properties
} 

type two{
    ...properties 
} 

type intersectionType : one&two 

Now the intesectionType has the properties of both the type "one" and "two"