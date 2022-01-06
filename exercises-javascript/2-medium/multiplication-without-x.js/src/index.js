
/*
MULTIPLICATION WITHOUT X

- Should multiply without simbol of multiply. Only multiply

int: a(number), b(number)
out: result(number)

For Example: 5 x 5 = 25
Intern Calculate: 5 + 5 + 5 + 5 + 5

Steps


*/

const multiply = ( a, b ) => {
    
    let result = 0
    const positive = Math.abs(b) == b

    for (let i = 0; i < Math.abs(b); i++) {
        
        result = positive ? result + a : result - a

    }
    
    return result 

}

console.log( multiply(5, 5) )

module.exports = multiply


