"use strict";

// const map = new Map();
// map.set(1, "Pratik"); // Returns updated map
// // hence we can directly do the modifications right on

// map.set(2, "Tanvi").set(3, "Jack").set(4,'Becky');

// console.log(map);

// console.log(map.get(1));

// console.log(map.has('Pratik'));

// map.set([5,6],'Laura'); // whole [5,6] acts as key

// console.log(map);

// map.set(6, "Saura");

// console.log(map.get([5,6])); //undefined because the first [5,6] has diffrernt address in heap and the one we used here has different,
//                             // but it will work with array by storing the array in variable first

const map = new Map();
map.set(2, "Pratk");
map.set(3, "Pratk");
map.set(4, "Pratk");
map.set(5, "Pratk");
map.set(6, "Pratk");
map.set(7, "Pratk");
map.forEach((key,map) => console.log(map,key));
