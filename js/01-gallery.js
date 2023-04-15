import { galleryItems } from "./gallery-items.js";
// Change code below this line

const refs = {
  galleryContainer: document.querySelector(".gallery"),
};

const listItemsMakup = createListItemsMarkup(galleryItems);
populateList(listItemsMakup);

refs.galleryContainer.addEventListener("click", onImageClick);

function createListItemsMarkup(elements) {
  return elements
    .map((element) => {
      return `<li class="gallery__item">
                <a href="${element.original}" class="gallery__link">
                    <img class="gallery__image" src="${element.preview}" alt="${element.description}" data-source="${element.original}">
                </a>
                </li>`;
    })
    .join("");
}

function populateList(markup) {
  refs.galleryContainer.innerHTML = markup;
}

function onImageClick(e) {
  blockStandartAction(e);
  const image = e.target;

  if (image.nodeName !== "IMG") {
    return;
  }

  const basicLightBoxImage =
    basicLightbox.create(`    <img src="${image.dataset.source}" width="800" height="600">
  `);
  
  basicLightBoxImage.show();
  window.addEventListener("keydown", (e) => {
    if (e.code === "Escape") {
      basicLightBoxImage.close();
    }
  });
}

function blockStandartAction(e) {
  e.preventDefault();
}
