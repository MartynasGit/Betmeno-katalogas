let page = 1;
let adresas = `https://www.omdbapi.com/?apikey=52cf66a0&s=Batman&page=${page}`
const filmai = document.querySelector('.filmai')
const sekantis = document.querySelector('.sekantis')
const esamas = document.querySelector('.esamas')
const ankstesnis = document.querySelector('.ankstesnis')

const getData = async (adresas) => {
    try{
    let response = await fetch(adresas);
    let json = await response.json()
    return json.Search;
    }
    catch{
        console.log('Klaida fetchinat')
    }
}
function patikra(page){
    if(page === 1 ){
        ankstesnis.classList.add('disabled')
        return;
    }
    if(page === 52){
         sekantis.classList.add('disabled')
         return;
    }
    else{
        sekantis.classList.remove('disabled')
        ankstesnis.classList.remove('disabled')
        return;
    }
}
function pirmyn() {
    page < 53 && page++
    adresas = `https://www.omdbapi.com/?apikey=52cf66a0&s=Batman&page=${page}`
    esamas.textContent = "Esamas puslapis: " + page;
    init(adresas);
}
function atgal() {
    page > 1 && page--;
    adresas = `https://www.omdbapi.com/?apikey=52cf66a0&s=Batman&page=${page}`
    esamas.textContent = "Esamas puslapis: " + page;
    init(adresas)
}

const init = async (adresas) => {
    patikra(page)
    let sar =  await getData(adresas)
    filmai.innerHTML = ""
    for (let i = 0; i < 10; i++){
        filmai.innerHTML += `<div class="text-center my-1">
                            <img src="${sar[i].Poster}"></img>
                            <span class="text-center d-block">${sar[i].Title}</span>
                            <span class="text-center">${sar[i].Year}</span>
                            <span class="text-center">${sar[i].Type}</span>
                            <div>`
    }

}
ankstesnis.addEventListener('click', atgal)
sekantis.addEventListener('click', pirmyn)
init(adresas)