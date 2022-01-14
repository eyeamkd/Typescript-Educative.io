# Enums 

Enum stands for enumerated, where you basically enumerate variables
Enumerate means, mention variables one by one
Therefore, enum is a type where you mention the possible values, or a list of values one by one 

```
enum sampleEnum { 
    name1= value1
    name2 = value2
    name3 = value3 
} 

const sampleVariable:sampleEnum = sampleEnum.name3

enum gender {
    MALE="male",
    FEMALE="female",
    other="other"
}

```
Now the gender variable, if assigned as an enum type, should be of those values only

if not defined a value explicitly, enum defaults to natural numbers starting from 0 

enum sample2{
    value1,
    value2,
    value3,
    value4,
    value5
} 

value1 starts from 0 and go on until 4 for value5 

You can access the value of an Enum, i.e an Enum's string value, directly just by interfacing it with an integer number
For example:

enum sample3{
    value11,
    value22,
    value33,
    value44
}

if you interface sample3[1], you get the string "name" of the enum, which is the key value, in this case value22 

This only happens when the enums are not assinged any values explicitly 

### There's something called console.table where you get to see the output in a tabluar format 

Enums can be defined in parts, i.e

enum Choices {
    choiceA
}
.
.
.
enum Choices{
    choiceB
}

if the value assingment isn't distinguishable or if it's repeated, then the last repeated value will be used 


You can also extend your enums to contain **functions** with the help of "namespaces"

enum Choices{
    choiceC
}

namespace Choices{
    export function someRandomFunction(){
        return "I am inside an Enum"
    }
}