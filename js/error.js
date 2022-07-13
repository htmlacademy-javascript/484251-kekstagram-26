import { body } from './user-modal.js';
import { isEscape } from './util.js';
import { imgUploadOverlay } from './user-form.js';

const error = document.querySelector('#error').content.querySelector('.error');
const errorNode = error.cloneNode(true);
const errorInner = errorNode.querySelector('.error__inner');
const errorButton = errorNode.querySelector('.error__button');

body.appendChild(errorNode);
errorNode.classList.add('hidden');

const onCloseError = () => {
  errorNode.classList.add('hidden');
  imgUploadOverlay.classList.remove('hidden');
  document.removeEventListener('keydown', onEscCloseError);
  document.removeEventListener('click', onOuterClickCloseError);
};

const showError = () => {
  imgUploadOverlay.classList.add('hidden');
  errorNode.classList.remove('hidden');
  errorButton.addEventListener('click', onCloseError);
  document.addEventListener('keydown', onEscCloseError);
  document.addEventListener('click', onOuterClickCloseError);
};

//функциональное выражение используется для всплытия
//решение коллизии взаимопроникновения
function onEscCloseError () {
  if(isEscape) {
    onCloseError();
  }
}

//функциональное выражение используется для всплытия
//решение коллизии взаимопроникновения
function onOuterClickCloseError (evt) {
  evt.preventDefault();
  if(evt.target !== errorInner) {
    onCloseError();
  }
}

export { showError };
