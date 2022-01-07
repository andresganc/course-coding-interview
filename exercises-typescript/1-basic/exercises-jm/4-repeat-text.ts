
/*

REPEAT TEXT

- Make program that repeat text x times

int: text(string) - repeat(number)
out: textRepeat(string)

For Example:
Text: NC
Repeat: 3
TextRepeat: NCNCNC

Steps
1. Make function with arguments text and repeat
2. Repeat text

*/


const repeatText = (text: string, repeat: number): string => {
    
    let textRepeated: string = text.repeat(repeat)
    
    return textRepeated

}

console.log( repeatText('NC', 3) )