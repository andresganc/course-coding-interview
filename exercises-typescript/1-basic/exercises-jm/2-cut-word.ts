
/*

CUT WORD

- Make program that get the text cut with the value given

int: text(string) - value(number)
ount textCut(string)

For Example:
Text: Newsoft Computer
Value: 3
TextCut: Newsoft Compu

Steps
1. Make function that get text and value
2. Convert text to array
3. Cut text

*/

const cutWord = (text: string, value: number): string => {
    
    return text.substring(0, value)

}

console.log( cutWord('Newsoft Computer', 7) )