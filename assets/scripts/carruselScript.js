const carouselImages = document.querySelector('#carousel-images');
const images = []

let currentIndex = 0;

const showImage = () => {
    carouselImages.innerHTML = `
        <img src="${images[currentIndex].imagen}" alt="${images[currentIndex].modelo}">
        <div class="caption">
            <p>${images[currentIndex].marca}</p>
            <p>${images[currentIndex].modelo}</p>
            <p>${images[currentIndex].precio}</p>
        </div>
    `;
}

const nextImage = () => {
    currentIndex++;
    if (currentIndex === images.length) {
        currentIndex = 0;
    }
    showImage();
}

const prevImage = () => {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = images.length - 1;
    }
    showImage();
}

fetch('./database/bicicletas.json')
    .then(res => res.json())
    .then(data => {
        for (const i of data) {        
            images.push(i);
        }
        showImage();
    document.querySelector('#prevBtn').addEventListener('click', prevImage);
    document.querySelector('#nextBtn').addEventListener('click', nextImage);
    })
    .catch(error => console.error(error));