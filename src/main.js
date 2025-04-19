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
let currentPage = 1;
let totalPages = 0;
let currentQuery = '';

async function create(userWrited, page) {
  try {
    console.log(page);
    showLoader();
    const result = await getImagesByQuery(userWrited, page);
    const [images, totalHits] = result;
    createGallery(images);
    showLoadMoreButton();
    totalPages = Math.ceil(totalHits / 15);
    if (page < totalPages) {
      showLoadMoreButton();
    } else {
      hideLoadMoreButton();
      if (page !== 1) {
        iziToast.info({
          position: 'bottomRight',
          message: "You've reached the end of search results.",
        });
      }
    }
  } catch (error) {
    hideLoadMoreButton();
    return error;
  } finally {
    hideLoader();
  }
}

form.addEventListener('submit', async e => {
  e.preventDefault();
  clearGallery();
  hideLoadMoreButton();
  let userWrited = e.target.elements['search-text'];
  currentQuery = userWrited.value;
  if (currentQuery.trim()) {
    let page = 1;
    await create(currentQuery, page);
    userWrited.value = '';
  }
});
moreButton.addEventListener('click', async () => {
  console.log(currentQuery);
  if (currentPage < totalPages) {
    currentPage++;
    await create(currentQuery, currentPage);

    const elem = document.querySelector('li:last-child');
    if (elem) {
      const rect = elem.getBoundingClientRect();
      window.scrollBy(0, rect.height);
    }
  }
});
