function populateUFs() {
    const ufSelect = document.querySelector("select[name=uf]")

    const url=`https://servicodados.ibge.gov.br/api/v1/localidades/estados`

    fetch(url)
    .then( res => res.json() ) // ( res => res.json()) - eronfunction - resposta que retorna em resposta em json
    .then( states => { 
        for (const state of states){
            ufSelect.innerHTML +=`<option value= "${state.id}" > ${state.nome} </option>`
        }
    })
}

populateUFs()

function getCities (event) {
    const cityselect = document.querySelector("select[name=city]")
    const stateInput = document.querySelector("input[name=state]")
        
    const ufvalue = event.target.value      //console.log(event.target.value)
        
    const indexOfSelectedState = event.target.selectedIndex
    stateInput.value = event.target.options[indexOfSelectedState].text  //options pega toda extensão - [0] do 0 ao 26 - sendo 27 etados
        
    const url=`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufvalue}/municipios`

   //citySelect.innerHTML = "<option value> Selecione a Cidade <option/>"    // removido por falha na cidade //
    //citySelect.disable = true     // removido por falha na cidade
        
    fetch(url)
        .then(res => res.json())
        .then(cities => {
        for(const city of cities){
            cityselect.innerHTML += `<option value="${city.nome}">${city.nome}</option>`
        }
        cityselect.disabled = false
    })
}
document
    .querySelector("select[name=uf]")
    .addEventListener("change", getCities)   

    
const itemsToCollect = document.querySelectorAll(".items-grid li")

for (const item of itemsToCollect) {
    item.addEventListener("click", handleSelectedItem)  
}
const collecteditems = document.querySelector("input[name=items]")

let selectedItems = []

function handleSelectedItem(event){
    const itemLi = event.target

  
    itemLi.classList.toggle("selected")

    const itemId = itemLi.dataset.id

  
    const alreadySelected = selectedItems.findIndex( item => {
        const itemFound = item == itemId 
        return itemFound
    }) 

    if( alreadySelected >= 0 ) {

        const filteredItems = selectedItems.filter( item => {
            const itemIsDifferent = item != itemId
            return itemIsDifferent
        })
        
    
        selectedItems = filteredItems
    
    }   else {
            selectedItems.push(itemId)
        }
collecteditems.value = selectedItems
//teste // erro no teste o console não funcionou antes de incluir a linha 50 e 81
}
//console.log(selectedItems) // teste falho