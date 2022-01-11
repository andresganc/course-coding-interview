
const funTextAll = () => {
    
    let textAll = document.getElementsByClassName('message-list')
    console.log(textAll)

    //let textAllCapital = textAll.toUpperCase()
    //console.log(textAllCapital)

    for (let i = 0; i < textAll.length; i++) {
        
       textAll[i].style.textTransform = 'uppercase'
    
    }

}


const funTextFirst = () => {
    
    let textFirst = document.getElementsByClassName('message-list')
    console.log(textFirst)

    for (let i = 0; i < textFirst.length; i++) {
        
        textFirst[i].style.textTransform = 'capitalize'
     
     }


}


const addList = () => {
    
    let textValue = document.getElementById('input-text').value
    let ulList = document.getElementById('ul-list')

    // Create element <li> + Add text
    let elementLi = document.createElement("li")
    elementLi.className = 'message-list'
    let textAdd = document.createTextNode(textValue)
    elementLi.appendChild(textAdd)

    // Add li to ul
    ulList.appendChild(elementLi)

    // Clean input
    cleanInputs()
}

const cleanInputs = () => {
    
    document.getElementById('input-text').value = ''

}