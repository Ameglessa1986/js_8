1.

let animals = new Map([
    ["dog", "good"],
    ["cat", "bad"],
    ["parrot", "kind"]
]);
animals.forEach((key) => {
    console.log(`${key} - x`);
});
animals.forEach((value) => {
    console.log(` ${value} - y`);
});

2. 

let animals = new Map([
    ["dog", "good"],
    ["cat", "bad"],
    ["parrot", "kind"]
]);
animals.forEach((value, key) => {
    console.log(`${key} - x = ${value} - y`);
});