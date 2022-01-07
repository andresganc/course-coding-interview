/*

Given an integer n, return true if it is a power of two. Otherwise, return false.

An integer n is a power of two, if there exists an integer x such that n == 2x.


Example 1:
Input: n = 1
Output: true
Explanation: 20 = 1

Example 2:
Input: n = 16
Output: true
Explanation: 24 = 16

Example 3:
Input: n = 3
Output: false
 

Constraints:

-231 <= n <= 231 - 1

*/


const powerOfTwo = ( num: number = 0 ) => {
    
    let i: number = 1

    while ( i < num ) {
        i *= 2
    }

    return i === num

}

powerOfTwo(5)