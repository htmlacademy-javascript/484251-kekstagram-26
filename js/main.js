import { getData } from './api.js';
import { showAlert } from './util.js';
import { renderThumbnails } from './thumbnails.js';
import { setUserFormSubmit, closeEditForm } from './user-form.js';
import './user-modal.js';
import './scale.js';
import './effects.js';
import './upload.js';
import './success.js';

getData(renderThumbnails, showAlert);

setUserFormSubmit(closeEditForm);
