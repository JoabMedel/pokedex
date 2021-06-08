export function getAllPokemon(url){
    return new Promise((resolve,reject)=>{
        fetch(url)
        .then(resposne => resposne.json())
        .then(data => {
            resolve(data)
        })
    });
}

export function getPokemon(url){
    return new Promise((resolve,reject)=>{
        fetch(url)
        .then(response => response.json())
        .then(data => {
            resolve(data)
        })
    })
}

export function getJapaneseName(url){
    return new Promise((resolve,reject)=>{
        fetch(url)
        .then(response => response.json())
        .then(data => {
            resolve(data.names[0].name)
        })
    })
}
