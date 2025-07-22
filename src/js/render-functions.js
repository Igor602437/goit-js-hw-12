import SimpleLightbox from 'simplelightbox';
import { refs } from './refs';

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

export function createGallery(images) {
  const markup = images
    .map(
      ({
        largeImageURL,
        webformatURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => `
  <li class="gallery-card js-gallery-card">
    <a href="${largeImageURL}">
      <img class="gallery-img" src="${webformatURL}" alt="${tags}" />
    </a>
    <ul class='card-item'>
      <li class="description">
        <h2>Likes</h2>
        <p>${likes}</p>
      </li>
      <li class="description">
        <h2>Views</h2>
        <p>${views}</p>
      </li>
      <li class="description">
        <h2>Comments</h2>
        <p>${comments}</p>
      </li>
      <li class="description">
        <h2>Downloads</h2>
        <p>${downloads}</p>
      </li>
    </ul>
  </li>
  `
    )
    .join('');

  refs.galleryList.insertAdjacentHTML('beforeend', markup);

  lightbox.refresh();
}

export const clearGallery = () => {
  refs.galleryList.innerHTML = '';
};

const loaderCondition = refs.loader.classList;
export const showLoader = () => loaderCondition.remove('is-hidden');
export const hideLoader = () => loaderCondition.add('is-hidden');

const loaderImgButton = refs.loadMoreButton.classList;
export const showLoadMoreButton = () => loaderImgButton.remove('is-hidden');
export const hideLoadMoreButton = () => loaderImgButton.add('is-hidden');
