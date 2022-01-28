const cardsCachorros = document.querySelector('.cachorros')

const carousel = document.querySelector('.root')

const mp4 = document.querySelector('videos')

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
                    `   <div class="col-sm-8 col-md-4 col-lg-4  mt-5" data-aos="zoom-out-down">
                            <div class="card p-0">
                                <div class="card-image">
                                    <img src=${perrito.img}>
                                </div>                        
                            </div>
                        </div>        
                `
            }
        )
    })



fetch('videos.json')
    .then(promesa => promesa.json())
    .then(data => data.map(video => {
        mp4.innerHTML += `
        <div class="col-12 col-lg-3">
        <video width="320" height="240" autoplay muted loop>
            <source src=${video.vid} type="video/mp4">
            Your browser does not support the video tag.
        </video>
        </div>
        `
    }))


