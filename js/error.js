import { body } from './user-modal.js';
import { isEscape } from './util.js';
import { imgUploadOverlay } from './user-form.js';

const error = document.querySelector('#error').content.querySelector('.error');
const errorNode = error.cloneNode(true);
const errorInner = errorNode.querySelector('.error__inner');
const errorButton = errorNode.querySelector('.error__button');
const errorFragment = document.createDocumentFragment();

const onCloseError = () => {
  errorNode.classList.add('hidden');
};

const showError = () => {
  errorFragment.appendChild(errorNode);
  body.appendChild(errorFragment);
  imgUploadOverlay.classList.add('hidden');
  errorButton.addEventListener('click', onCloseError);
  document.addEventListener('keydown', () => {
    if(isEscape) {
      onCloseError();
    }
  });
  document.addEventListener('click', (evt) => {
    evt.preventDefault();
    if(evt.target !== errorInner) {
      onCloseError();
    }
  });
};

export { showError };
