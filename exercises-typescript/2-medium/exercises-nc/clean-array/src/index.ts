
/*

CLEAN ARRAY

- Make program that clean array of null, false, undefined

int: arrayOrigin(array)
out: arrayClean(array)

For Example:
arrayOrigin: [5, null, 8, 9, false, undefined, 45, 978]
arrayClean: [5, 8, 9, 45, 978]

Steps:
1. Make function that get array
2. Make logic code for clean

*/


const cleanArray = (arr: any[]) => arr.reduce((acc, el) => {

    if (el) {
        acc.push(el)
    }
    return acc

}, [])

export default cleanArray

//const arrayOrigin = cleanArray ([5, null, 8, 9, false, undefined, 45, 978])
//console.log(arrayOrigin)

