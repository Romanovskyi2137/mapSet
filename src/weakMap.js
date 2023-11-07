
const obj = {name: "Andrii"}; // in default situtaion if you 
const weakMap = new WeakMap([[obj, "obj data"]]); // only objects in keys
// get set delete has, the only methods



const cache = new WeakMap();
function cacheUser (user) {
    if (!cache.has(user)) {
        cache.set(user, Date.now())
    }
    return
};
let lena = {name: "Lena"};
let alex = {name: "Alex"};
cacheUser(alex);
cacheUser(lena);
console.log(cache.has(alex));
console.log(cache.has(lena));
alex = null;
console.log(cache.has(alex));

// garbage collector features
// if you make some obj, that this obj = null or something... when you try to get some data from this obj it will fail
// in default map that obj will be saved, in weakMap - it`s don`t




