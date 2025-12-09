# What is destructuring

Destructuring is a way of assigning variables to arrays values or object values faster without changing the origninal array or object

# Destructuring arrays

**example**

```javascript
let array = [1,2,3];
let [one ,two ,three] = array;
console.log(one); // 1
```
In the previous example the numbers from 1-3 gets assigned to thier written form variables

## it can be used to swap to elements' value

**example**

```javascript
let client = "Ahmed";
let admin = "Khaled";
[client ,admin] = [admin ,client];
console.log(admin); // Ahmed
```

## if you want to bypass an element you just leave it empty

**example**
```javascript
let numbers = [1,2,3];
let [one ,, three] = [1,2,3];
console.log(three); //3
```
## if you want to put rest of the elements in an array you can do ...rest

**example**

```javascript
let numbers = [1 ,2 ,3 ,4 ,5 ,6 ,7 ,8 ];
let [one ,two ,three , ...rest] = numbers;
console.log(rest); // [4 ,5 ,6, 7, 8]
```
## you can set a default value in case it's undefined in the array

**example**

```javascript
let numbers = [1,2];
let [one ,two = "something" ,three = 3];
console.log(three); // 3 (default value)
console.log(two); // 2 (array set value) since it's defined in the array
```

# destructuring Objects

## you can set a variable with the name of an object key to it's value

**example**

```javascript
let obj = {
    one : 1,
    two : 2,
    three : 3
};
let {one ,two ,three} = obj;
console.log(three); //3
```
## if the object has a name that can't be used as a variable name

**example**

```javascript
let obj = {
    "one" : 1,
    "two" : 2,
    "three" : 3
};
// strings can't be used as variable name
// you set the key to the variable name you wanna assign it to
let {"one": one ,"two":two ,"three":three} = obj;
console.log(three); //three
```
Note: you can do this to use a diffrent variable name than the key but have the sam value


