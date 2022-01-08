
const funTextAll = () => {
    
    let textAll = document.getElementById('text-all').textContent
    console.log(textAll)

    let textAllCapital = textAll.toUpperCase()
    console.log(textAllCapital)

}


const funTextFirst = () => {
    
    let textFirst = document.getElementById('text-first').textContent
    console.log(textFirst)

    let textFirsArray = textFirst.split(' ')
    new Array(wordsCapital)

    for (let i = 0; i < textFirsArray; i++) {
        
        let wordsTemp = textFirst.charAt(0).toUpperCase() + textFirsArray.slice(1)
        
        wordsCapital.push(wordsTemp)
    }

    
    console.log(wordsCapital)

}


const addList = () => {
    
    let textValue = document.getElementById('input-text').value
    let ulList = document.getElementById('ul-list')

    // Create element <li> + Add text
    let elementLi = document.createElement("li")
    let textAdd = document.createTextNode(textValue)
    elementLi.appendChild(textAdd)

    // Add li to ul
    ulList.appendChild(elementLi)

}