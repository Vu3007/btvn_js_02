// //Bai1
// function checkElementExist(number,arr1){
//     for(let i=0;i<arr1.length;i++){
//         if(number=arr1[i]){
//             return true;
//         }
//     }
//     return false;
// }
// let arr1=[1,3,5,6,9];
// let number=6;
// console.log(checkElementExist(number,arr1));
// //Bai2
// function getElementGreater(numbers,arr){
//     result=[];
//     for(let i=0;i<arr.length;i++){
//         if(numbers<arr[i]){
//             result.push(arr[i]);
//         }
//     }
//     return result;
// }
// let arr=[1,3,5,6,9];
// let numbers=7;
// console.log(getElementGreater(numbers,arr));
// //bai3
let products = [
    {
        name: "Iphone 13 Pro Max", // Tên sản phẩm
        price: 3000000, // Giá mỗi sản phẩm
        brand: "Apple", // Thương hiệu
        count: 2, // Số lượng sản phẩm trong giỏ hàng
    },
    {
        name: "Samsung Galaxy Z Fold3",
        price: 41000000,
        brand: "Samsung",
        count: 1,
    },
    {
        name: "IPhone 11",
        price: 15500000,
        brand: "Apple",
        count: 1,
    },
    {
        name: "OPPO Find X3 Pro",
        price: 19500000,
        brand: "OPPO",
        count: 3,
    },
]
//1
console.log("STT|Tên sản phẩm|Giá|Thương hiệu|Số lượng");
for(let i=0;i<products.length;i++){
    const product=products[i];
    console.log(`${i+1}|${product.name}|${product.price}|${product.brand}|${product.count}`);
}
//2
    let totalMoney = 0;
    for (let i = 0; i < products.length; i++) {
        const p = products[i];
        totalMoney += p.count * p.price;
    }

console.log(totalMoney);
//3

for (let i = 0; i < products.length; i++) {
    const p = products[i];
    if(products.brand="Apple"){
       console.log(p.name);
    }
}
//4
for (let i = 0; i < products.length; i++) {
    const p = products[i];
    if(p.price>20000000){
       console.log(p.name);
    }
}
//5
for (let i = 0; i < products.length; i++) {
    const p = products[i];
    if(p.name.toUpperCase="pro"){
       console.log(p.name);
    }
}
//7
function removeItem(id) {
    for (let i = 0; i < products.length; i++) {
        if (products[i].id == id) {
            products.splice(i, 1);
        }
    }
    
}
let id=3;
console.log(removeItem(id));




