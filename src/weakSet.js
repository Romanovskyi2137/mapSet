const users = [
    {name: "Lena"},
    {name: "Alex"}
];

const visits = new WeakSet(); // only objects in keys, only "has" method
visits
    .add(users[0])
    .add(users[1])
console.log(visits.has(users[0]));
console.log(visits.has(users[1]));
users.splice(1, 1);
console.log(visits.has(users[1]));

// same stuff like in weakMap, garbage collector stuff, if you delete some obj, it`s deleted from the set
