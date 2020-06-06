function populateUFs() {
    const ufSelect = document.querySelector("select[name=uf]")

    const url=`https://servicodados.ibge.gov.br/api/v1/localidades/estados`

    fetch(url)
    .then( (res) => { return res.json() }) // ( res => res.json()) - eronfunction - resposta que retorna em resposta em json
    .then( states => { 
        for (const state of states){
            ufSelect.innerHTML +=`<option value= "${state.id}" > ${state.nome} </option>`
        }
    })
    }

    populateUFs()

    function getCities (event) {
        const cityselect = document.querySelector("select[name=city]")
        //const stateInput = document.querySelector("input[name=state]")
        
        const ufvalue = event.target.value //console.log(event.target.value)
        
        //const indexOfSelect
        //stateInput.value = event.target.options //options pega toda extensão - [0] do 0 ao 26 - sendo 27 etados
        
        const url=`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufvalue}/municipios`
        
        fetch(url)
            .then(res => res.json())
            .then(cities => {
                for(const city of cities){
                    cityselect.innerHTML += `<option value="${city.id}">${city.nome}</option>`
                }
            cityselect.disabled = false
    })
    }


document
    .querySelector("select[name=uf]")
    .addEventListener("change", getCities)                                 // 1 ouvidor de eventos ligado a i elemento uf

                                                                           // uma das formas seria repetir este document cima 6x para ler cada item de coleta os li's - nada prático e se forem 100 x kkkk

                                                                           // então a estratégia será dentro da lógica:

                                                                           //em itens de Coleta - ao invés de repetir n x  as configurações para os li's faremos:

const itemsToCollect = document.querySelectorAll(".items-grid li")        //todos ps itens de li

/*1
const itemsToCollect = document.querySelectorAll(".items-grid li")*/

for (const item of itemsToCollect) {                                     // para cada um deles faremos algo no 'item' - ou seja add o ouvidor de enventos
    item.addEventListener("click", handleSelectedItem)                   //ao clicar isto ocorrerá // inserido por referência 'handleSelectedItem'
}
/*
1) function handleSelectedItem(event){
    console.log(event.target)                                              //5//verificando no Console verei exemplo: ((<li data="5">_</li>))
    
                                                                           //0// seleciona toda a caixa o pai e filho == li e img-span
                                                                           //1// console.log(event.target) no css dei comamando para target selecionar somente li, e, não imagem nem span (1) - testei no Console  e agora posso add em um const incluindo id (2)-  console.log(event.target.dataset.id)
                                                                           //2// (3)agora posso remover do html a class forçada (( <li data-id="1" class="selected"> )) criada para teste. 
                                                                           //3//  - removido, pois foi criado para teste - 
                                                                           //4// alterado - const itemId = event.target.dataset.id 
                                                                           //console.log()
}

2)
function handleSelectedItem(event){
    console.log(event.target.dataset.id)                               //6// pega os número que tem em cada id selecionado - verei no Console, exemplo: 1 
}

3)
function handleSelectedItem(event){
    const itemId = event.target.dataset.id
    console.log()
}

4)
function handleSelectedItem(event){
    const itemli = event.target

    const itemId = event.target.dataset.id
}*/

                                                                       //6 - fora do function criar uma variável / quais serão os itens selecionados, aqui será uma coleção de dados, ou seja um aurei []
// só não usar em 9, 12)
//let selectedItems = []

//10) usar para ex. 9)
//let selectedItems = [1, 2, 3, 4, 5, 6]

//13) usar em 12)
//let selectedItems = [1, 2]

//5)
function handleSelectedItem(event){
    const itemLi = event.target

                                                                       //add or remove class in js == add ou remover uma classe ( aqui - selected ) em js
                                                                       //itemLi.classList.add("class") or remove("class") or toggle ("class") -- toggle = remove ou add - ele olha o elemento 'itemli' na lista de class 'classList' verifica, existe selected então irá remmover ou não existe, então irá add (tem essa inteligência/lógica)
    itemLi.classList.toggle("selected")

    const itemId = itemLi.dataset.id

 // 7)
                                                                    //passo a passo - algorítimos da programação para aplicar a lógica de programação:

                                                                    // começa vazio [] 

                                                                     // 1- // Verificar se existem itens selecionados
                                                                     // 2- // se sim, pegar os itens selecionados [1]

 /*11) versão simplificada
    const alreadySelected = selectedItems.findIndex( item => item == itemId )    
                                                                    //(function é =>) - uma eron //  item - é um argumento
                                                                      // não preciso desta variável - const itemFound ((true or false)) = item == itemId ((tru or false))- pois ambos dizem a mesma coisa um = ao outro
                                                                      // return itemFound - muda esta leitura para retornar direto, fica / return item == itemId /

 */

 //8)    
    const alreadySelected = selectedItems.findIndex(function(item) {// recebe da function um true or false
        const itemFound = item == itemId      //achei o item, - busca se é true or false - se o item for igual ao itemId será true 
        return itemFound
    })                                                                 // = - atribui valor ; == - compara um valor
                                                                        //selectedItems. (.)existem muitas funcionalidades para usar neste already[] atravéz desse pontinho de ligação com estruturas de repetição e muito mais
                                                                           //entenda a lógica [] sempre inicia de zero a quantos existirem aqui são 6 li's , logo serão de 0 a 5 []
                                                                           //findIndex - find procura no Index- função de Index - recebe como parâmetro uma outra função dentro dele curta por que é anônima function()

                                                                           // 3- // se/'if' já estiver selecionado,  tirar o item da seleção , 
 
 // 12) teste dois , para teste usar console.log() e ver na tela Inspecionar em Console
    console.log(alreadySelected)                                                                  
                                                                        
                                                                           // 4- // por exemplo, clico em [1] que já está clicado/selecionado tenho que retirá-lo []

                                                                           // 5- // se não estiver selecionado [], add a seleção [1]

                                                                           // 6- // atualizar o campo escondido com os dados/itens selecionados, // usar os dados contidos em [1] ((li date-id="1"))
    
                                                                           //[] coloca ou retira itens
