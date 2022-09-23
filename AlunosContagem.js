//Contagem de Alunos
// Par ou Impar

let = NumerodeAlunos = ["a", "b", "c", "d", "e"]

for (let contador = 0; contador < NumerodeAlunos.length; contador++) {
    
    if (contador == 0) {
        console.log("zero")

    }else if (contador % 2 == 0) {
        console.log(`o numero ${contador} é par`)

    } else {
        console.log(`o numero ${contador} é impar`)
    }
    
}

NumerodeAlunos.array.forEach(cadaItem => {
    console.log(cadaItem)
});