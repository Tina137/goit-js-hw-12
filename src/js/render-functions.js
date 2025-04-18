import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
const ul = document.querySelector('.gallery');

let gallery = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
function createGallery(images) {
  let markup = '';

  images.forEach(image => {
    markup += `
    <li>
      <a href="${image.largeImageURL}">
        <img src="${image.webformatURL}" alt="${image.tags}" title="" />
        <table>
          <thead>
            <tr class="th">
              <th>Likes</th>
              <th>Views</th>
              <th>Comments</th>
              <th>Downloads</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>${image.likes}</td>
              <td>${image.views}</td>
              <td>${image.comments}</td>
              <td>${image.downloads}</td>
            </tr>
          </tbody>
        </table>
      </a>
    </li>
  `;
  });

  ul.insertAdjacentHTML('beforeend', markup);
  gallery.refresh();
}
export default createGallery;

const loader = document.querySelector('#loader');
function showLoader() {
  loader.classList = '';
}
function hideLoader() {
  loader.classList = 'hide';
}
function clearGallery() {
  ul.innerHTML = '';
}

const moreButton = document.querySelector('#more');

function showLoadMoreButton() {
  moreButton.classList = '';
}
function hideLoadMoreButton() {
  moreButton.classList = 'hide';
}
export {
  showLoader,
  hideLoader,
  clearGallery,
  showLoadMoreButton,
  hideLoadMoreButton,
  moreButton,
};
