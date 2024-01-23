// Armstrong number
// 1. Find the number of digits in the number
// 2. Find the sum of the cubes of the digits
// 3. Check if the sum is equal to the number

// 371 = 3^3 + 7^3 + 1^3 = 371

// Dividing the number by 10 effectively "shifts" 
// the digits to the right. For example, if num is 123, 
// then num / 10 would be 12.3. But we want an integer, 
// so we use Math.floor(num 

function isArmstrong(num) {
    let sum = 0;
    let temp = num;
    while(num > 0) {
        let lastDigit = num % 10;
        sum += lastDigit* lastDigit* lastDigit;
        num = Math.floor(num/10);
    }
    if(sum == temp) {
        return true;
    } else {
        return false;
    }
}

console.log(isArmstrong(371));