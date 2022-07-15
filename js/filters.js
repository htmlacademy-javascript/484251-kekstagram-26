import { debounce } from './util.js';
import { renderThumbnails } from './thumbnails.js';

const QUANTITY_RANDOM_PICTURES = 10;
const RERENDER_DELAY = 500;

const imgFilters = document.querySelector('.img-filters');
const filterButtons = imgFilters.querySelectorAll('button');

const clearThumbnails = () => {
  const pictures = document.querySelectorAll('.picture');
  pictures.forEach((picture) => picture.remove());
};

const comparePhotos = (photo1, photo2) => photo2.comments.length - photo1.comments.length;

const FiltersFunctions = {
  'filter-default': (photos) => photos.slice(),
  'filter-random': (photos) => photos.slice().sort(() => Math.random() - 0.5).slice(0, QUANTITY_RANDOM_PICTURES),
  'filter-discussed': (photos) => photos.slice().sort(comparePhotos),
};

const changeActiveButton = (clickedButton) => {
  imgFilters.querySelector('.img-filters__button--active').classList.remove('img-filters__button--active');
  clickedButton.classList.add('img-filters__button--active');
};

const initFilters = (photos) => {
  imgFilters.classList.remove('img-filters--inactive');
  filterButtons.forEach((button) => {
    button.addEventListener('click', (evt) => {
      changeActiveButton(evt.target);
      debounce(() => {
        clearThumbnails();
        renderThumbnails(FiltersFunctions[evt.target.id](photos));
      }, RERENDER_DELAY)();
    });
  });
};

export { initFilters };
