import { getData } from './api.js';
import { showAlert } from './util.js';
import { initFilters } from './filters.js';
import { renderThumbnails } from './thumbnails.js';
import { setUserFormSubmit, closeEditForm } from './user-form.js';
import './user-modal.js';
import './effects.js';
import './success.js';
import './upload.js';
import './scale.js';

getData((photos) => {
  renderThumbnails(photos);
  initFilters(photos);
}, showAlert);

setUserFormSubmit(closeEditForm);
