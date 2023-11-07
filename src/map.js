const obj = {
    name: "Andrii",
    age: 26,
    job: "software engineer"
};
const entries = [
    ["name", "Andrii"],
    ["age", 26],
    ["job", "software engineer"]
];
// console.log(Object.entries(obj)); // to entries
// console.log(Object.fromEntries(entries)); // to obj

const map = new Map(entries);
// console.log(map);
// console.log(map.get("name")); // value
map
    .set("new field", "value of new field")
    .set(obj, "some value")

// console.log(map)
// console.log(map.get(obj));
map.delete("job"); // boolean
map.has("job"); // boolean
map.size // number
// map.clear() // clear the map object
for (let [key, value] of map) { // ...of map.keys()/map.values()
    key, value
};

map.forEach((value, key, m) => { // m == our map object
    value, key, m
});
const arrayFromMap = [...map]; // || Array.from(map);
// console.log(arrayFromMap);
const objFromEntr = Object.fromEntries(map.entries());
// console.log(objFromEntr);

// ====================================== samples

const users = [
    {name: "Elena"},
    {name: "Igor"},
    {name: "Evhen"},
];

const visits = new Map();

users.forEach(({name}, index) => visits.set(name, new Date(Date.now() + index * 1000 * 60)));


const lastVisit = (user, data) => {
    return data.get(user)
};

console.log(lastVisit("Elena", visits));
console.log(lastVisit("Igor", visits));
console.log(lastVisit("Evhen", visits));
