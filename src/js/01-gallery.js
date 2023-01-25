import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryEl = document.querySelector('.gallery');

galleryEl.addEventListener('click', onGalleryItemClick);

const elementOfGalleryMarkup = galleryItems
  .map(
    image =>
      `<div class="gallery__item"><a class="gallery__link" href="${image.original}"><img class="gallery__image" src="${image.preview}" data-source="${image.original}" alt="${image.description}" /></a></div>`
  )
  .join('');

galleryEl.insertAdjacentHTML('beforeend', elementOfGalleryMarkup);

// function onGalleryItemClick(e) {
//   const image = e.target;
//   const imageOriginal = image.dataset.source;

//   if (image.nodeName !== 'IMG') {
//     return;
//   }
//   e.preventDefault();

//   const instance = basicLightbox.create(
//     `
// 		<img width="800" height="600" src="${imageOriginal}" >
// 	`
//   );
//   instance.show();
//   galleryEl.addEventListener('keydown', e => {
//     if (e.code === 'Escape') {
//       instance.close();
//     }
//   });
// }
