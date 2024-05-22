const url = "https://api.nasa.gov/planetary/apod?api_key=e7pa4fbUmch2jYhdMdLZQUeFT9ATZEB3ZTSb2BOd&count=30";

async function listaImagenes(){
    try{
        let fetchImagen = await fetch(url)
        let datosImagenes = await fetchImagen.json()

        const card = document.querySelector("[data-ul]")

       datosImagenes.forEach( elemento => {
            const contenido = 
            `<li class="card">
            <img class="card__image" src="${elemento.url}" alt="imagen">
             <h3 class="card__title">${elemento.title}</h3>
            </li>`

        card.innerHTML = card.innerHTML + contenido

    })
}
    catch(error){
        console.log(error)
    }
}
listaImagenes()




//*fetch y catch
// function listaImagenes (){
//     fetch(url)
//     .then( response => response.json())
//     .then( datosImagenes => {
//         console.log(datosImagenes)

//         const card = document.querySelector("[data-ul]")

//         datosImagenes.forEach( elemento => {
//             const contenido = `<li class="card">
//             <img class="card__image" src="${elemento.url}" alt="imagen">
//             <h3 class="card__title">${elemento.title}</h3>
//         </li>`

//             card.innerHTML = card.innerHTML + contenido
//         })
//     })
//     .catch( error => console.log(error))

// }
// listaImagenes ()