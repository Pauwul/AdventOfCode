const fs = require("fs");

const inp = fs.readFileSync("input.txt", "utf-8").toString();
let max1 = 3;
let max2 = 2;
let max3 = 1;

const arr = inp.split(/\n\n/gi);
let arr2 = [];
for (index in arr) {
  tempElement = arr[index].split(/\n/gi).toString().split(",");
  let sum = tempElement.reduce((total, num) => {
    return Number(total) + Number(num);
  });
  arr2.push(Number(sum));
}
// sorts an array in reverse order
arr2.sort((a, b) => b - a);
console.log(arr2[0] + arr2[1] + arr2[2]);
