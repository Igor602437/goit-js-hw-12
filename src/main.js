import iziToast from 'izitoast';

import { getImagesByQuery } from './js/pixabay-api';
import { refs } from './js/refs';
import {
  createGallery,
  showLoader,
  hideLoader,
  clearMarkUp,
} from './js/render-functions';

function onCreateGallery(event) {
  event.preventDefault();
  const inputEl = event.target.elements.search_text;
  const searchedValue = inputEl.value.trim();

  if (searchedValue === '') {
    iziToast.error({
      message:
        'Sorry, the search field must be filled. Please enter correct data!',
      position: 'topRight',
    });
    inputEl.value = '';
    return;
  }

  clearMarkUp();
  showLoader();
  inputEl.value = '';

  getImagesByQuery(searchedValue)
    .then(data => {
      if (data.hits.length === 0) {
        iziToast.error({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          position: 'topRight',
        });
        hideLoader();
        inputEl.value = '';
        return;
      }
      const markup = createGallery(data.hits);
    })
    .catch(err => {
      hideLoader();
      console.log(err);
    });
}
refs.inputForm.addEventListener('submit', onCreateGallery);
