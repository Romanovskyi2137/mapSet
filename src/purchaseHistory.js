const item1 = "laptop";
const item2 = "PC";
const item3 = "monitor";
const item4 = "graphics card";
const item5 = "keyboard";
const item6 = "mouse";
const item7 = "processor";
const item8 = "memory";
const item9 = "ssd";

const user1 = {
    name: "Andrii",
    age: 26,
    status: "client",
    email: "someEmail1@gmail.com"
};
const users1History = [item1, item1, item6, item6, item1, item1, item1, item8, item8, item1, item9, item1, item9];
const user2 = {
    name: "Sergiy",
    age: 25,
    status: "client",
    email: "someEmail2@gmail.com"
};
const users2History = [item2, item2, item2, item2, item3, item3, item4, item4, item4, item5, item5, item5, item5, item7, item8, item9];

const purchaseMap = new Map();
purchaseMap
    .set(user1, users1History)
    .set(user2, users2History);

const usersInMap = purchaseMap.keys();

function purchaseService (userEmail, type, map = purchaseMap) {
    let user = null;
    for (let userData of map.keys()) {
        if (userData.email == userEmail) {
            user = userData
        }
    };
    if (!user) {
        return () => `user with email : ${userEmail}, not found.`
    };
    switch (type){
        case "often":
            return () => getOftenPurchase(user, map);
        case "unique":
            return () => getUniquePurchase(user, map)
    }
}
function getUniquePurchase (user, map) {
    const purchaseData = new Set(map.get(user));
    return [...purchaseData]
};
function getOftenPurchase (user, map) {
    const purchaseData = map.get(user);
    const listOfGoods = [...new Set(purchaseData)];
    const howOften = {};
    for (let i of listOfGoods) {
        let counter = 0;
        for (let j of purchaseData) {
            if (j == i) {
                counter += 1
            }
        }
        howOften[i] = counter;
        counter = 0
    }
    return Object.entries(howOften)
};


// test cases:
const oftenPurchaseOfUser1 = purchaseService("someEmail1@gmail.com", "often");
const oftenPurchaseOfUser1x = purchaseService("someEmail3@gmail.com", "often");
const uniquePurchaseOfUser2 = purchaseService("someEmail2@gmail.com", "unique");
console.log(uniquePurchaseOfUser2()); // unique purchases of the user
console.log(oftenPurchaseOfUser1()); // most often purchases of the user
console.log(oftenPurchaseOfUser1x()); // error, user not found...