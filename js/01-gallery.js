import { galleryItems } from "./gallery-items.js";
// Change code below this line
const currentUl = document.getElementsByClassName("gallery")[0];

const CollectionImages = galleryItems.map((galleryItem) =>
  galleryItem =`
        <li class="gallery__item" >
        <a class="gallery__link" href=${galleryItem.original}>
            <img
            class="gallery__image"
            class="lazyload blur-up"
            src=${galleryItem.preview} 
            data-src=${galleryItem.preview} 
            data-source=${galleryItem.original}
            alt=${galleryItem.description} />
        </a>
      </li>`
)
currentUl.innerHTML = CollectionImages.join('');

currentUl.addEventListener('click', (e) => {
  e.preventDefault();  
  if (e.target.nodeName !== 'IMG') {
    return;
  } 
  // const modalImage = e.target.getAttribute('data-source');
  const modalImage = e.target.closest('a');
  console.log(modalImage);
  const pictureInfo = e.target.alt;
  const instance = basicLightbox.create(
    `<h1 style="font-size: 32px; color: red; text-align: center;">Welcome to the Gallery</h1>
    <h2 style="font-size: 28px; color: yellow; text-align: center;">Pictures name: ${pictureInfo}</h2>
    <img src="${modalImage}" >`)
  instance.show()

  currentUl.addEventListener('keydown', e => {
 if  (e.code === 'Escape') {
    instance.close()
  } 
})
});
