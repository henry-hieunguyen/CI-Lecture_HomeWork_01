// -------- Problem 01------------

// const users = [
//     { name: "Angelina Jolie", age: 8 },
//     { name: "Eric Jones", age: 2 },
//     { name: "Paris Hilton", age: 5 },
//     { name: "Kayne West", age: 16 },
//     { name: "Bob Ziroll", age: 100 },
// ];

// let result = users.map((user) => {
//     return `<div><h1>${user.name}</h1><h2>${user.age}</h2></div>`
// });
// console.log(result);


// -------- Problem 02 ---------

// const students = [
//     { name: 'Lan', gender: 'female' },
//     { name: 'Linh', gender: 'female' },
//     { name: 'Trung', gender: 'male' },
//     { name: 'Peter', gender: 'other' },
// ];

// let filterGender = students.filter((fillItem) => {
//     return fillItem.gender != "female";
// });
// console.log(filterGender);

// -------- Problem 03 ---------

// let strs = ["eat", "tea", "tan", "ate", "nat", "bat"];

// function groupAnagrams(strs) {
//     let result = {};
//     for (let word of strs) {
//         let cleansed = word.split("").sort().join("");
//         if (result[cleansed]) {
//             result[cleansed].push(word);
//         } else {
//             result[cleansed] = [word];
//         }
//     }
//     return Object.values(result);
// }

// -------- Problem 04 ----------

let nums = [4, 1, 2, 1, 2];
let result = 0;

let numSingle = (nums) => {
    if (!nums) {
        return;
    }
    for (let i = 0; i < nums.length; i++) {
        result ^= nums[i];
    }
    return result;
};





