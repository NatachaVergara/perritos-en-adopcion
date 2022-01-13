const cardsCachorros = document.querySelector('.cachorros')

const carousel = document.querySelector('.root')

fetch('slider.json')
    .then(promesa => promesa.json())
    .then(data => {
        data.map(slider => {
            carousel.innerHTML += `
            <div class="carousel-item repetir">
                            <img src=${slider.img}
                                class="d-block " alt="...">
                        </div>
        
            `
        })
    })


fetch('perritos.json')
    .then((promesa) => promesa.json())
    .then(data => {
        data.map(
            perrito => {
                cardsCachorros.innerHTML +=
                    `<div class="col-lg-4">
                    <div class="card p-0 m-5">
                        <div class="card-image"> <img src=${perrito.img}> </div>
                        <div class="card-content d-flex flex-column     align-items-center">
                            <h4 class="pt-2">SomeOne Famous</h4>
                            <h5>Creative Desinger</h5>
                            <ul class="social-icons d-flex justify-content-center">
                                <li style="--i:1"> <a href="#"> <span class="fab fa-facebook"></span> </a> </li>
                                <li style="--i:2"> <a href="#"> <span class="fab fa-twitter"></span> </a> </li>
                                <li style="--i:3"> <a href="#"> <span class="fab fa-instagram"></span> </a> </li>
                            </ul>
                        </div>
                    </div>
                `
            }
        )
    })

