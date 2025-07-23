import iziToast from 'izitoast';

import { getImagesByQuery, perFotoLimit } from './js/pixabay-api';
import { refs } from './js/refs';
import {
  createGallery,
  showLoader,
  hideLoader,
  clearGallery,
  hideLoadMoreButton,
  showLoadMoreButton,
} from './js/render-functions';

let page = 1;
let searchedValue = '';
let inputEl = null;

async function onCreateGallery(event) {
  event.preventDefault();
  inputEl = event.target.elements.search_text;
  searchedValue = inputEl.value.trim();

  if (searchedValue === '') {
    iziToast.error({
      message:
        'Sorry, the search field must be filled. Please enter correct data!',
      position: 'topRight',
    });
    inputEl.value = '';
    return;
  }
  clearGallery();
  inputEl.value = '';
  page = 1;

  renderGallery();
}

async function renderGallery() {
  try {
    hideLoadMoreButton();
    showLoader();

    const arr = await getImagesByQuery(searchedValue, page);

    if (arr.hits.length === 0) {
      iziToast.error({
        message:
          'Sorry, there are no images matching your search query. Please try again!',
        position: 'topRight',
      });
      // hideLoader();

      return;
    }
    createGallery(arr.hits);
    if (page > 1) {
      scroll();
    }

    const totalPages = Math.ceil(arr.totalHits / perFotoLimit);
    if (totalPages > page) {
      page += 1;
    } else {
      hideLoadMoreButton();
      iziToast.info({
        message: "We're sorry, but you've reached the end of search results.",
        position: 'topRight',
      });
      return;
    }
    showLoadMoreButton();
  } catch (error) {
    console.log(error);
    iziToast.error({
      message: `Sorry, you have encountered an error: ${error}`,
      position: 'topRight',
    });
  } finally {
    hideLoader();
  }
}

function getCardHeight() {
  const card = document.querySelector('.js-gallery-card');
  if (!card) return 0;
  const { height } = card.getBoundingClientRect();
  return height;
}
function scroll() {
  const cardHeight = getCardHeight();
  window.scrollBy({
    top: (cardHeight + 24) * 2,
    left: 0,
    behavior: 'smooth',
  });
}

refs.inputForm.addEventListener('submit', onCreateGallery);
refs.loadMoreButton.addEventListener('click', renderGallery);
