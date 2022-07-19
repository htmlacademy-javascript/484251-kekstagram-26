import { body } from './user-modal.js';
import { isEscape } from './util.js';
import { imgUploadOverlay } from './user-form.js';

const error = document.querySelector('#error').content.querySelector('.error');
const errorNode = error.cloneNode(true);
const errorButton = errorNode.querySelector('.error__button');

body.appendChild(errorNode);
errorNode.classList.add('hidden');

const onCloseError = () => {
  errorNode.classList.add('hidden');
  imgUploadOverlay.classList.remove('hidden');
  document.removeEventListener('keydown', onEscCloseError);
};

const onOuterClickCloseError= (evt) => {
  if(evt.target.classList.contains('error')) {
    onCloseError();
  }
};

const showError = () => {
  imgUploadOverlay.classList.add('hidden');
  errorNode.classList.remove('hidden');
  errorButton.addEventListener('click', onCloseError);
  document.addEventListener('keydown', onEscCloseError);
  errorNode.addEventListener('click', onOuterClickCloseError);
};

//функциональное выражение используется для всплытия
//решение коллизии взаимопроникновения
function onEscCloseError (evt) {
  if(isEscape(evt)) {
    onCloseError();
  }
}

export { showError };
