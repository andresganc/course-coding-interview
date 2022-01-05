
/* 

SEARCH AND COUNT EQUAL WORDS

Exercises: Search and Count Equals Words

In: Text(string) and word(string)
Out: Text(string), How many times is the word repeated(number)

Steps
1. Functions with parameters text and wordNumber
2. Lower case text and clean
3. Check if the word is included in the text 
4. Create array of the text
5. Map the words and make an accountant the each word
6. Return Text and Number the words

*/


const searchCountWord = (text: string, word: string) => {
    
    let textClean: string = text.toLowerCase().replace(/[!¡.,-]/gi, '')
    let wordClean: string = word.toLowerCase().replace(/[!¡.,-]/gi, '')
    let result: number = 0

    if (textClean.includes(word)) {
        
        let wordsArray: any[] = textClean.split(' ')
        let mapa = new Object()

        for (let wordArray of wordsArray) {

            if (mapa[wordArray]) {
                mapa[wordArray]++
            } else {
                mapa[wordArray] = 1
            }  
            
        }

        //console.log(wordArray)
        console.log(mapa)

        return console.log(wordsArray)
    } else {
        result = 0
    }
    
}

searchCountWord('Newsoft Computer empresa de servicios tecnologicos. Newsoft', 'Newsoft')

