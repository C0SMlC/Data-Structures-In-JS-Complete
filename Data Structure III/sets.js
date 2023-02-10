'use strict'

// DIFFERENCE BETWEEN ARRAYS AND SET
// Arrays can have duplicates but sets cant
// There is no method to access the particular element of sets
// Sets are meant to contain ordered, unidentical data

const set = new Set([1,2,3,4,5,6,1,2,3,4,5,6]); // OP => Set(6) { 1, 2, 3, 4, 5, 6 }
console.log(set);
set.add(8);
console.log(set);
console.log(set.delete(6 /* value to be removed */));
console.log(set);

