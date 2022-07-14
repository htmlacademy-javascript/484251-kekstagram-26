import { getData } from './api.js';
import { showAlert, debounce } from './util.js';
import { renderThumbnails } from './thumbnails.js';
import { setUserFormSubmit, closeEditForm } from './user-form.js';
import { setDefaultClick, setRandomClick, setDiscussedClick, getRandomThumbnails, getDiscussedThumbnails } from './filters.js';
import './user-modal.js';
import './scale.js';
import './effects.js';
import './upload.js';
import './success.js';

const RERENDER_DELAY = 500;

const imgFilters = document.querySelector('.img-filters');

getData((photos) => {
  renderThumbnails(photos);
  setDefaultClick(debounce(() => renderThumbnails(photos), RERENDER_DELAY));
  setRandomClick(debounce(() => renderThumbnails(getRandomThumbnails(photos)), RERENDER_DELAY));
  setDiscussedClick(debounce(() => renderThumbnails(getDiscussedThumbnails(photos)), RERENDER_DELAY));
}, showAlert);

imgFilters.classList.remove('img-filters--inactive');

setUserFormSubmit(closeEditForm);
