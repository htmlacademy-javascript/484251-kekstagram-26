import { body } from './user-modal.js';
import { isEscape } from './util.js';
import { imgUploadOverlay } from './user-form.js';

const success = document.querySelector('#success').content.querySelector('.success');
const successNode = success.cloneNode(true);
const successInner = successNode.querySelector('.success__inner');
const successButton = successNode.querySelector('.success__button');
const successFragment = document.createDocumentFragment();

const onCloseSuccess = () => {
  successNode.classList.add('hidden');
  imgUploadOverlay.classList.add('hidden');
};

const showSuccess = () => {
  successFragment.appendChild(successNode);
  body.appendChild(successFragment);
  imgUploadOverlay.classList.add('hidden');
  successButton.addEventListener('click', onCloseSuccess);
  document.addEventListener('keydown', () => {
    if(isEscape) {
      onCloseSuccess();
    }
  });
  document.addEventListener('click', (evt) => {
    evt.preventDefault();
    if(evt.target !== successInner) {
      onCloseSuccess();
    }
  });
};

export { showSuccess };

