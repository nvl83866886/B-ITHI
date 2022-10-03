// Bài 1
let str = prompt("Mời bạn nhập vào 1 chuỗi");
let arr = str.split(",");

for (let i = str.length - 1; i >= 0; i--) {
    arr += str[i];
}
console.log(arr);
//.................................................
// Bài 2