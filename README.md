# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me (dinopranjic) as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @dinopranjic/lotide`

**Require it:**

`const _ = require('@dinopranjic/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `countLetters(string)`: Takes in a string and returns an object containing all the letters in the string and how many times they occur.

* `countOnly(allItems, itemsToRemove)`: takes in an array of items and an object listing items as true or false. Returns a new object containing all the items listed as true in the array and how many times they occur.

* `eqArrays(firstArray, secondArray)`: takes in two arrays and returns true if they are the same or false if they are not the same. 

* `eqObjects(object1, object2)`: takes in two objects and returns true if they are the same or false if they are not the same.

* `findKey(object, callback)`: takes in an object and a callback function. Returns a key according to the callback.

* `findKeyByValue(object, value)`: takes in an object and a value. Returns a key with a value that matches the value input.

* `flatten(array)`: takes in a two-dimensional array and returns a 'flattened' one-dimensional array.

* `head(array)`: takes in an array and returns a new array containing the 'head' or first element.

* `letterPositions(string)`: takes in a string and returns the index positions of each letter. 

* `map(array, callback)`: takes in an array and a callback function. Returns new modified array according to callback.

* `middle(array)`: takes in an array. Returns a new array containing the middle element(s) of the array.

* `tail(array)`: takes in an array. Returns a new array containing the 'tail' or every element but the first element.

* `takeUntil(array, callback)`: takes in an array and callback function. Returns a new array containing elements up to, but not including, the first element to satisfy the callback function. 

* `without(source, itemsToRemove)`: takes in two arrays. Returns a new modified array with elements of the source array that did not match elments of the second array.

* `assertEqual(actual, expected)`: takes in two primitive data types and console logs whether they are the same or not.

* `assertArraysEqual(array1, array2)`: takes in two arrays and console logs whether they are the same or not.

* `assertObjectsEqual(object1, object2)`: takes in two objects and console logs whether they are the same or not.