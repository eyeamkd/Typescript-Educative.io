Note:
Transformation + Compilation = Transpilation 

# Tuple in TS? 

Tuple literally refers to a type/list that is finite, which means a finite array can be called as a tuple. 

Therefore, various ways of defining a tuple in TS is as follows: 

``` 
type tuple1 : [number, number ]; 

interface tuple2 : [number, string, number];  

type tuple3 : readonly [number, number]

type tuple4 : Readonly<[number, number]>
```

**Explanation** 

tuple1 : tuple can be initialized as "types" 

tuple2 : tuples can also be initialized as interfaces 

tuple3 : tuples can be read only with the keyword "readonly", i.e the values once assinged to the tuples can't be changed  

tuple4: mapped type Readonly created tuple type