import axios from 'axios';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

async function getImagesByQuery(query, page) {
  let response = await axios.get(
    `https://pixabay.com/api/?key=49659648-1ebf0f70bcfba68f8c305ff0f&q=${query}&image_type=photo&orientation=horizontal&safesearch=true&per_page=15&page=${page}`
  );
  try {
    if (response.data.hits.length == 0) {
      iziToast.error({
        title: '',
        message: `Sorry, there are no images matching your search query. Please try again!`,
        position: 'topRight',
      });
    } else {
      return [response.data.hits, response.data.totalHits];
    }
  } catch (error) {
    return error;
  }
}

export default getImagesByQuery;
