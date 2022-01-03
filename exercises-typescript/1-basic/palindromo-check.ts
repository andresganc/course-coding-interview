
/* 

PALINDROME

- A palindrome is a word what that read equald of left to right or right to left

Given a word, check if is palindrome

Out: true or false

Steps
1. Function for get text
2. Converter text to array
3. Reverse text
4. Join text
5. Compare words
6. Return True or False

*/

const palindrome = (text: string = ''): boolean => {
    
    let textInverter: string = text
    .split('')
    .reverse()
    .join('')


    return text === textInverter 
}

console.log( palindrome('otto') )