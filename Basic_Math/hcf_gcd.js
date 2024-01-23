// greatesh Common factor or Greatest Common Divisor
// 1. Find the factors of both the numbers
// 2. Find the common factors
// 3. Find the greatest common factor

function gcd(n1, n2) {
    let ans = 1;
    for(let i=1; i<=Math.min(n1, n2); i++) {
        if(n1%i == 0 && n2%i == 0) {
            ans = i;
            // break;
        }
    }
    return ans;
}


 console.log(gcd(12, 24));
 // Time Complexity: O(min(a, b))
// Space Complexity: O(1)

 // Euclidean Algorithm
    // 1. Find the remainder of the two numbers
    // 2. Replace the larger number with the remainder
    // 3. Repeat the process until the remainder is 0
    // 4. The other number is the GCD

    function gcdEuclid(a, b) {
        
        while(a> 0 && b> 0) {
            if(a>b) {
                a= a%b
            } else {
                b=b%a;
            }
        }
        if(b == 0) return a;
        if(a == 0) return b;
        
    }

    console.log(gcdEuclid(12, 24));
    // Time Complexity: O(log(min(a, b)))
    // Space Complexity: O(1)

    // why the time complexity is O(log(min(a, b)))?
  