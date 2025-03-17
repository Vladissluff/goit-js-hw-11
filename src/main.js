import { searchImages } from './js/pixabay-api.js';
import { renderGallery } from './js/render-functions.js';
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const form = document.querySelector('.form');
const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    
    const query = event.target.elements['search-text'].value.trim();
    
    if (!query) {
        throw new Error('Please enter a search term!');
    }

    gallery.innerHTML = ''; 
    loader.classList.remove('hidden'); 

    searchImages(query)
        .then(images => {
            if (images.length === 0) {
                throw new Error('Sorry, there are no images matching your search query. Please, try again!');
            }
            renderGallery(images, gallery); 
        })
        .catch(error => {
            iziToast.error({ message: error.message }); 
        })
        .finally(() => {
            loader.classList.add('hidden'); 
        });
});