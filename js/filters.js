const QUANTITY_RANDOM_PICTURES = 10;

const imgFiltersForm = document.querySelector('.img-filters__form');
const filterDefault = imgFiltersForm.querySelector('#filter-default');
const filterRandom = imgFiltersForm.querySelector('#filter-random');
const filterDiscussed = imgFiltersForm.querySelector('#filter-discussed');

const comparePhotos = (photo1, photo2) => photo2.comments.length - photo1.comments.length;

const clearThumbnails = () => {
  const pictures = document.querySelectorAll('.picture');
  pictures.forEach((picture) => picture.remove());
};

const getRandomThumbnails = (thumbnails) => thumbnails.slice().sort(() => Math.random() - 0.5).slice(0, QUANTITY_RANDOM_PICTURES);

const getDiscussedThumbnails = (thumbnails) => thumbnails.slice().sort(comparePhotos);

const setDefaultClick = (cb) => {
  filterDefault.addEventListener('click', () => {
    filterRandom.classList.remove('img-filters__button--active');
    filterDiscussed.classList.remove('img-filters__button--active');
    filterDefault.classList.add('img-filters__button--active');
    clearThumbnails();
    cb();
  });
};

const setRandomClick = (cb) => {
  filterRandom.addEventListener('click', () => {
    filterDiscussed.classList.remove('img-filters__button--active');
    filterDefault.classList.remove('img-filters__button--active');
    filterRandom.classList.add('img-filters__button--active');
    clearThumbnails();
    cb();
  });
};

const setDiscussedClick = (cb) => {
  filterDiscussed.addEventListener('click', () => {
    filterDefault.classList.remove('img-filters__button--active');
    filterRandom.classList.remove('img-filters__button--active');
    filterDiscussed.classList.add('img-filters__button--active');
    clearThumbnails();
    cb();
  });
};

export { setDefaultClick, setRandomClick, setDiscussedClick, getRandomThumbnails, getDiscussedThumbnails };
