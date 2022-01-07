

// METODO USADO: String Split()
// let nc = Newsoft Computer empresa de servicios tecnologicos 
// nc.split(' ', 50)

function textoToArray(texto: string, separador: string) {
    return console.log(`El texto es ${texto} conversion a array: ${texto.split(separador)}`) 
}

textoToArray('Newsoft Computer empresa de servicios tecnologicos', ' ')


