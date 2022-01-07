
/*

COUNT LETTERS OF THE WORD

- Make program what count the words of a text

int: text(string)
out: num(number)

For Example
Text: Hello world
Number of letters: 10

Steps
1. Make function that get text
2. Convert text to array
3. Logic de code for count the words

*/

const countWord = (text) => {
    
    let textArray = text.split('')
    let accountant = 0

    textArray.forEach(e => {
        accountant ++
    });
    
    return accountant
}

console.log( countWord('Hola'))