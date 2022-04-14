import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import '../styles/responsive.css';

const menu = document.querySelector('#menu');
const hero = document.querySelector('.hero');
const main = document.querySelector('main');
const drawer = document.querySelector('#drawer');

const image = "https://restaurant-api.dicoding.dev/images/medium/";
const restoList = document.querySelector("#list");

fetch("https://restaurant-api.dicoding.dev/list")
.then(response => {
    return response.json();
})
.then(responseJson => {
    console.log(responseJson.restaurants);
    responseJson.restaurants.forEach(item => {
        restoList.innerHTML += `
        <div class="resto__box">
                    <div class="resto__img">
                        <img id="gambar1" src="${image}${item.pictureId} " alt="Gambar Resto ${item.name} ">
                    </div>
                    <div class="resto__rating">
                        <p>Rating: ${item.rating}</p>
                    </div>

                    <div class="nama__resto">
                        <h1 id="nama_resto1">${item.name}</h1>
                    </div>
                    <div class="desk__resto">
                        <p id="deskripsi_resto1" >${item.description.slice(0,100)}</p>
                    </div>
        `;
    });
    
})
.catch(error => {
    return error;
})


menu.addEventListener('click', function (event) {
    drawer.classList.toggle('open');
    event.stopPropagation();
});

hero.addEventListener('click', function () {
    drawer.classList.remove('open');
});

main.addEventListener('click', function () {
    drawer.classList.remove('open');
});





