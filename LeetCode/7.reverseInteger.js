//****  Reverse Integer ****//
/* Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.
Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

Example 1:
Input: x = 123
Output: 321

Example 2:
Input: x = -123
Output: -321

Example 3:
Input: x = 120
Output: 21

Constraints:
-231 <= x <= 231 - 1
*/


/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    const INT_MIN = -(2**31); // -2147483648
    const INT_MAX = 2**31 - 1; // 2147483647

    let reversed = 0;
    let num = Math.abs(x);

    while (num !== 0) {
        const digit = num % 10;
        num = Math.floor(num / 10);

        // Check for overflow
        if (reversed > Math.floor(INT_MAX / 10) || (reversed === Math.floor(INT_MAX / 10) && digit > 7)) {
            return 0;
        }
        if (reversed < Math.ceil(INT_MIN / 10) || (reversed === Math.ceil(INT_MIN / 10) && digit > 8)) {
            return 0;
        }

        reversed = reversed * 10 + digit;
    }

    return x < 0 ? -reversed : reversed;
};

// Example usage:
console.log(reverse(123)); // Output: 321
console.log(reverse(-123)); // Output: -321
console.log(reverse(120)); // Output: 21
console.log(reverse(0)); // Output: 0
