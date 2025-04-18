import getImagesByQuery from './js/pixabay-api';
import createGallery from './js/render-functions';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import {
  showLoader,
  hideLoader,
  clearGallery,
  showLoadMoreButton,
  hideLoadMoreButton,
  moreButton,
} from './js/render-functions';

const form = document.querySelector('.form');

function create(userWrited, page) {
  getImagesByQuery(userWrited, page)
    .then(images => {
      console.log(images);
      createGallery(images[0]);
      showLoadMoreButton();
      let totalPages = Math.ceil(images[1] / 15);
      if (page > totalPages) {
        hideLoadMoreButton();
        return iziToast.error({
          position: 'bottomRight',
          message: "We're sorry, but you've reached the end of search results.",
        });
      }
    })
    .catch(error => {
      hideLoadMoreButton();
      return error;
    })
    .finally(() => {
      hideLoader();
    });
}

form.addEventListener('submit', e => {
  e.preventDefault();
  clearGallery();
  let userWrited = e.target.elements['search-text'];
  if (userWrited.value.trim()) {
    showLoader();
    let page = 1;
    let query = userWrited.value;
    moreButton.addEventListener('click', e => {
      page++;
      create(query, page);
      let elem = document.querySelector('li:last-child');

      let rect = elem.getBoundingClientRect();
      window.scrollBy(0, rect.height);
    });
    create(query, page);
    userWrited.value = '';
  }
});
