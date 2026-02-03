// String Method

const word = "Nikhil";

// console.log(word);

// console.log(word.includes("3"))
// console.log(word.concat("hillo"))
// console.log(word.indexOf("k"))
// console.log(word.repeat(3))
// console.log(word.replace("k", "x"))
// console.log(word.search("k"))
// console.log(word.slice(0, 3))
// console.log(word.slice(-8, 4))
// console.log(word.slice(3, -2))
// console.log(word.split("", 3))
// console.log(word.substring(2, 4))

// Math methods

const num = 100.2;

// console.log(num.toPrecision(3))
// console.log(num.toFixed(5))

// random number trick

// const min = 10;
// const max = 20;

// const random = Math.floor(Math.random()*10 + 1)

// console.log(random)

// const random2 = Math.floor(Math.random() * ((max - min) + 1) + min)

// console.log(random2)

// Arrays

const myArr = [1, 2, 3, 4, 5, 6];

// console.log(myArr)
// console.log(myArr.slice(0, 4))
// console.log(myArr.splice(3, 0, "nix", 69))
// console.log(myArr)

const arr1 = [1, 2, 3, 4];
const arr2 = [5, 6, 7, 8];

// ways to join these arr;
// console.log(arr1.concat(arr2));
const newArr = [...arr1, ...arr2];
// console.log(newArr);

// if there is nested arr and we want to make it readable

const nestedArray = [
  1,
  2,
  [3, 4],
  [5, 6, [7, 8]],
  [
    [9, 10],
    [11, 12],
  ],
];

// console.log(nestedArray.flat(Infinity))
// console.log(Array.from("nix"))
// console.log(Array.from({name: "nikil"}))

// console.log(Array.of("nix" , "kin" , "22"))

// add symbol in object and print it

const sym = Symbol("key")
const user = {
  name: "Nikhil",
  age: 22,
  [sym] : "101",
  isActive: true
};

// console.log(user[sym]);
