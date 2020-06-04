// comments
// document.write("Hello")

// variaveis, tipos de dados
// let myvar = "He"
// const myconst = "He"

// document.write(myconst + myvar)

// string
// "Isso é uma string"
// 'Isso também é um string'
// `Isso é uma string também`

// number
// const n1 = 1
// const n2 = 12
// document.write(n1 + n2)

// boolean - true ou false
// const bTrue = true
// const bFalse = false
// document.write(bFalse)

// objeto possuem propriedades e funcionalidade
// const pessoa = {
//   altura: "1,80m",
//   idade: 24,
//   solteiro: true,
//   correr(){
//     document.write("executar uma grande logica de correr")
//   }
// }

// pessoa.correr()

// Array - Vetores
// const colecaoDeBolinhas = ["blue", "green", 1, {name: "My Name"}]

// document.write(colecaoDeBolinhas[3].name)


// Funções - Funcionalides - Atalhos - Reuso de código

// // registrar função
// function sayMyName(name) {
  
//   document.write(name)
// }

// // executar
// sayMyName("Douglas")
// sayMyName("Valeska")
// sayMyName("Kyam")

// condicionais

// const notaFinal = 7

// if( notaFinal < 5 ) {
//   document.write("Reprovado")
// } else {
//   document.write("Aprovado")
// }

// loop repetições
// for (i = 0; i < 10; i++) {
//   document.write(`<p>${i}</p>`)
// }
function populateUfs() {
    const ufSelect = document.querySelector("select [name=uf]")
    fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
    .then( (res) => res.json())// para sentença simples // {return res.json()} ) para sentença maior, rodar mais códigos// função anônima que está retornando um valor
    .then( states => { 
        for (const state of states){ ufSelect.innerHTML += `<option value="${state.id}">${states.nome}</option>`}})}// - propriedade do html no uf select / elementos do html dentro do select // ufSelect.innerHTML + ufSelect.innerHTML = `<option value="1">Valor</option>` 
populateUfs()

document
    .querySelector("select[name=uf]")
    .addEventListener("change", () => { console.log ("mudei")}) (eronfunchon) //divisor ouvidos abertos e eventos, e são muitos , pág carrega clicar , change/ mudança 
// .addEventListener ("cnange", function() {})/ acima é outra forma de criar função anônima /
//then - correto - pesquisou e trouxe resultado
//catch - caminho que desce errado (eronfunchon)