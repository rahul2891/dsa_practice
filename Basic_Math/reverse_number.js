// Reverse a number 
// 1. Find the number of digits in the number
// 2. Extract the last digit
// 3. Add the last digit to the reversed number
// 4. Remove the last digit from the number
// 5. Repeat steps 2 to 4 until the number is 0
// if number is 10400, then the reverse number is 401

function reverseNumber(num) {
    let revN = 0;
    while(num > 0) {
        let lastDigit = num % 10;
        revN = (revN * 10) + lastDigit;
        num = Math.floor(num/10);
    }
    return revN;
}

console.log(reverseNumber(1234));