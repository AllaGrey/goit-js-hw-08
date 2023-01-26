import { galleryItems } from './gallery-items.js';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Change code below this line

const galleryEl = document.querySelector('.gallery');

const elementOfGalleryMarkup = galleryItems
  .map(
    image =>
      `<a class="gallery__item" href="${image.original}" ><img class="gallery__image" src="${image.preview}" data-source="${image.original}" alt="${image.description}" /></a>`
  )
  .join('');

galleryEl.insertAdjacentHTML('beforeend', elementOfGalleryMarkup);

new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: '250',
});
