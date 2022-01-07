
/*

LETTERS SEPARATED

- Make program that get a text and cant separated with simbol 

int: text(string) - separator(any)
out: textSeparated(string)

For Example:
Text: Andres
Separator: -
TextSeparated: A-n-d-r-e-s

Steps
1. Make function that get text and separator
2. convert text to array
3. Separated

*/


const lettersSeparated = (text: string, separator: any): string => {
    
    let textSeparated: string = text.split('').join(separator);

    return textSeparated

}

console.log( lettersSeparated('Andres', '-' ) )