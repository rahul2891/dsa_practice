// Panlindrome number
//panlindrome number is a number that is same after reverse
// 1. Find the number of digits in the number
// 2. Extract the last digit
// 3. Add the last digit to the reversed number
// 4. Remove the last digit from the number
// 5. Repeat steps 2 to 4 until the number is 0
// if number is 10400, then the reverse number is 401

function isPanlindrome(num) {
    let revN = 0;
    while(num > 0) {
        let lastDigit = num % 10;
        revN = (revN * 10) + lastDigit;
        num = Math.floor(num/10);
    }
    if(revN == num) {
        return true;
    } else {
        return false;
    }
}

console.log(isPanlindrome(1234));