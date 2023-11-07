const set = new Set([1, 1, 2, 2, 3, 3, 3, 4, 5, 6]);
// console.log(set); // ret {with unique keys}
set
    .add(20)
    .add(30)
    .add(0)
    .add(20);
// console.log(set);
set.has(20) // boolean
set.size // number
set.delete(1) 
// set.clear()
set.keys || set.values // same result
// =============================== sample

function uniqueValues (arr) {
    return [...new Set(arr)]
};
console.log(uniqueValues([1, 1, 2, 3, 5, 5, 6, 6]));