# JavaScript Array Methods Notes

## map()

First the map() Method is an array method It's used to put a property of
an element or maybe do some change to each element and put it in a new
array

**Syntax**
```javascript
let array1 = array2.map(function(item , index, array))
```

let's explain it further the first argument "item" is an element of the
array the one that is in turn\
second argument "index" is is the index of current element\
third argument is array which is the array the element is a part of\
the value that the function returns is put in the new array

**Example**
```javascript
array1 = [1, 2 ,3 ,4 ].map((item, i) ⇒{
        return item*i;
})
```

in this example the map method takes each item in order and multiplies
it by it's index\
so array1 will be \[0,2,6,12\]\
you can add an array argument as mentioned in the beginning
```javascript
let percentage = numbers.map((item, index, array) => {
    return item / array.length;
})
```
as in this one the map method takes each item in order and divides it by
the array length

## filter()

second is filter it's similar to map takes all elements one by one and
plugs it into a function the only difference is that it puts the same
element to the array when the function returns true only

**Syntax**
```javascript
array1 = array2.filter(function(item, index, array))
```
the arguments are the same

**Example**
```javascript
array1 = [0 ,1 ,2 ,3 ,4 …….,10].filter(item ⇒ item % 2 == 0)
```
in this one filter takes each number and checks if it's divisible by 2
or not if it's it's put in array1\
array1 will have even numbers from 0--10 (\[0 ,2 ,4 ,6 ,8 ,10\])

## reduce()

finally the reduce method reduce takes all element and plugs them into a
function and it has an accumulator\
and it returns the final value of accumulator after all elements have
been passed

**Syntax**
```javascript
let array1 = array2.reduce(function(accumulator, item, index, array), [initial]);
```
the function takes 4 arguments first is accumulator the other three are
the same as the previous\
reduce take another argument not only a function which is the initial
initial is the initial value of the accumulator if initial isn't
specified accumulator takes first element in the array as the initial\
however it's not recomended

**Example**
```javascript
let numbers = [1 ,2 ,3 ,4  5 ]
let sum = numbers.reduce((acc ,item) ⇒ acc += item, 0)
```
since initial is provided accumilator first value = intital = 0\
so the function applies for the first time acc = acc + 1\
acc = 0 + 1 = 1\
then in the second time acc = acc + 2\
acc last value was 1 so it plugs it in\
acc = 1 + 2 = 3\
again\
acc = 3 + 3 = 6\
until it reaches\
acc = 10 + 5 = 15 so it returns 15\
you can add other arguments if you want but to calculate the some it's
not required
