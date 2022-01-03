
const palindromo = (text) => {
    
    let textInverter = text
    .split('')
    .reverse()
    .join('')


    if ( text === textInverter ) {
        return true
        //return console.log('Si es palindromo')
    } else {
        return false
        //return console.log('No es palindromo')
    }
}

palindromo('otto')