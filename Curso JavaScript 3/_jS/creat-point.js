function populateUFs() {
    const ufSelect = document.querySelector("select[name=uf]")

    const url=`https://servicodados.ibge.gov.br/api/v1/localidades/estados`

    fetch(url)
    .then( res => res.json())                                                   // ( res => res.json()) ( (res) => { return res.json() })   - eronfunction - resposta que retorna em resposta em json
    .then( states => { 
        for (const state of states){
            ufSelect.innerHTML +=`<option value= "${state.id}" > ${state.nome} </option>`
        }
    })
    }

    populateUFs()

    function getCities (event) {
        const cityselect = document.querySelector("[name=city]")                                        //const cityselect = document.querySelector("select[name=city]")
        const stateInput = document.querySelector("[name=state]")                                       //const stateInput = document.querySelector("input[name=state]")
        
        const ufvalue = event.target.value                                                              //console.log(event.target.value)
        
        const indexOfSelectedStte=event.target.selectedIndex                                        //ou seja qual é o número do estado selecionado //diz qual é o número
        stateInput.value = event.target.options[indexOfSelectedState].text                          // qual dos options está elecionado para pegar o texto dele //options pega toda extensão - [0] do 0 ao 26 - sendo 27 etados
        
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
    .addEventListener("change", getCities)

