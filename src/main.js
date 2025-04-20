import getImagesByQuery from './js/pixabay-api';
import createGallery, {
  showLoader,
  hideLoader,
  clearGallery,
  showLoadMoreButton,
  hideLoadMoreButton,
  moreButton,
} from './js/render-functions';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

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

    if (images.length === 0) {
      iziToast.warning({
        position: 'topRight',
        message: 'Sorry, no images found. Please try another search.',
      });
      return;
    }

    createGallery(images);
    totalPages = Math.ceil(totalHits / 15);

    if (page < totalPages) {
      showLoadMoreButton();
    } else {
      hideLoadMoreButton();
      if (page !== 1) {
        iziToast.info({
          position: 'bottomRight',
          message: "We're sorry, but you've reached the end of search results.",
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
  currentQuery = userWrited.value.trim();
  if (currentQuery) {
    currentPage = 1;
    await create(currentQuery, currentPage);
    userWrited.value = '';
  }
});

moreButton.addEventListener('click', async () => {
  if (currentPage < totalPages) {
    currentPage++;
    await create(currentQuery, currentPage);

    const elem = document.querySelector('li:last-child');
    if (elem) {
      const rect = elem.getBoundingClientRect();
      window.scrollBy({
        top: rect.height * 2,
        behavior: 'smooth',
      });
    }
  }
});
