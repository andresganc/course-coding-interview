
/*

MAJOR VALUE OF ARRAY

- Make program that get major number of an array

int: arrayNumber(array)
out: majorNumber(number)

For Example:
ArrayNumber: [5, 15, 100, 5000, 2, 345]
MajorNumber: 5000

Steps: 
1. Make function get array
2. Logic code for get major number

*/

const majorValueArray = ( arrayNumber: number[] ): number => {
    
    let majorNumber: number = arrayNumber.reduce( (acc, el) => acc > el ? acc : el )

    return majorNumber

}

export default majorValueArray

// console.log( majorValueArray([ 1, 2, 3, 4500, 6]) )

