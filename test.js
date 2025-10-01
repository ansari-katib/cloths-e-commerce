


//  use of include method : 
const useCase = (num, target) => {
    if (num.includes(target)) {
        return true;
    }
    return false
}

let arr = [1, 2, 3, 4, 5];
let a = 3;

let arr1 = [1, 2, 3, 4, 5];
let a1 = 0;

console.log(useCase(arr, a));
console.log(useCase(arr1, a1));



// how filter method work : 
let arr3 = [1, 2, 3, 4, 5, 6, 7, 8].filter((n) => n % 2 == 0);
console.log(arr3);




//  it return the number of miliseconds since january  1 , 1970 , 00:00:00 UTC
/*

GMT : based on earth rotation , and sun position at london :  (solar time)             , used before 1972 ,
UTC : Cordinate Universl Time , atomic clock + earth rotation                          , use after 1972 ,

*/

let now = new Date();
console.log(now.toUTCString().toString());

const newId = Date.now().toString() + Math.random().toString(36);

console.log(Date.now());
console.log(Math.random().toString());
console.log(Math.random().toString().substring(2, 9))
console.log("katib ansari".substring(5, 9));



//  usecase of sort method : 
console.log([6, 2, 9, 5, 87, 4, 3].sort((a, b) => a - b));