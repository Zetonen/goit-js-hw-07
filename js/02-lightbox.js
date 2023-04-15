import { galleryItems } from "./gallery-items.js";
// Change code below this line

const refs = {
  galleryContainer: document.querySelector(".gallery"),
};

const listItemsMakup = createListItemsMarkup(galleryItems);
populateMarkup(listItemsMakup);

const gallery = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionPosition: "bottom",
  captionDelay: 250,
});

function createListItemsMarkup(elements) {
  return elements
    .map((element) => {
      return `<li class="gallery__item">
                  <a href="${element.original}" class="gallery__link">
                      <img class="gallery__image" src="${element.preview}" alt="${element.description}">
                  </a>
                  </li>`;
    })
    .join("");
}

function populateMarkup(markup) {
  refs.galleryContainer.innerHTML = markup;
}
