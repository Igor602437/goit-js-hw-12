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

let page = 0;
let searchedValue = '';
let offsetY = null;
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
    if (page > 1) {
      updateLastLi();
    }
    hideLoadMoreButton();
    showLoader();

    const arr = await getImagesByQuery(searchedValue, page);

    if (arr.hits.length === 0) {
      iziToast.error({
        message:
          'Sorry, there are no images matching your search query. Please try again!',
        position: 'topRight',
      });
      hideLoader();
      inputEl.value = '';
      return;
    }
    const markup = createGallery(arr.hits);

    if (arr.totalHits > page * perFotoLimit) {
      page += 1;
    } else {
      hideLoadMoreButton();
      hideLoader();
      refs.loadMoreButton.removeEventListener('click', renderGallery);
      iziToast.info({
        message: "We're sorry, but you've reached the end of search results.",
        position: 'topRight',
      });
      return;
    }
    hideLoader();
    showLoadMoreButton();
    function updateLastLi() {
      let rect = refs.elem.lastElementChild;
      rect.classList.add('last-item');
      let rected = rect.getBoundingClientRect();
      offsetY = rected.height + rected.top;
    }
    const scroll = () => {
      window.scrollBy({
        top: offsetY,
        left: 0,
        behavior: 'smooth',
      });
    };
    if (page > 2) {
      scroll();
    }
  } catch (error) {
    hideLoader();
    console.log(err);
  }

  refs.loadMoreButton.addEventListener('click', renderGallery);
}

refs.inputForm.addEventListener('submit', onCreateGallery);
