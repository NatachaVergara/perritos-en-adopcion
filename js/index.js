const cardsCachorros = document.querySelector('.cachorros')


fetch('perritos.json')
    .then((promesa) => promesa.json())
    .then(data => {
        data.map(
            perrito => {
                cardsCachorros.innerHTML +=
                `<div class="card col-4" style="width: 15rem;">
            <img src=${perrito.img} class="card-img-top" alt="...">
            <div class="card-body">
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
            </div>


                `
            }
        )
    } )


