// function isPrime(num) {
//     let count = 0;
//     for(let i=1; i<=num; i++) {
//         if(num%i === 0) {
//             count++;
//             if((num/i) != i) count++;
//         }
//         if(count === 2) {
//             return true;
//         } else {
//             return false;
//         }
//     }
// }

function isPrime(num) {
    let count = 0;
    for(let i=1; i*i<=num; i++) {
        if(num%i === 0) {
            count++;
            if((num/i) != i) count++;
        }
        if(count === 2) {
            return true;
        } else {
            return false;
        }
    }
}

console.log(isPrime(1111));