import SimpleLightbox from 'simplelightbox';
// Додатковий імпорт стилів
import 'simplelightbox/dist/simple-lightbox.min.css';

// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

const galleryContainer = document.querySelector('.gallery');

const images = galleryItems.map(({ original, preview, description}) => {
  return `<div class="gallery__item">
  <a class="gallery__link" href="${original}" >
  <img
    class="gallery__image"
    src="${preview}"
    data-source="${original}"
    alt="${description}"
  />
  </a>
  </div>`
}).join(" ");

galleryContainer.innerHTML = images;

let lightbox = new SimpleLightbox('.gallery a', { 
  /* options */ 
  captions: true, 
  captionsData: 'alt',
  captionDelay: 250,
  captionPosition: 'bottom'    
});