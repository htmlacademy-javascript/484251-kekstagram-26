import { body } from './user-modal.js';
import { isEscape } from './util.js';
import { imgUploadOverlay } from './user-form.js';

const success = document.querySelector('#success').content.querySelector('.success');
const successNode = success.cloneNode(true);
const successButton = successNode.querySelector('.success__button');

body.appendChild(successNode);
successNode.classList.add('hidden');

const onCloseSuccess = () => {
  successNode.classList.add('hidden');
  document.removeEventListener('keydown', onEscCloseSuccess);
};

const onOuterClickCloseSuccess = (evt) => {
  if(evt.target.classList.contains('success')) {
    onCloseSuccess();
  }
};

const showSuccess = () => {
  successNode.classList.remove('hidden');
  imgUploadOverlay.classList.add('hidden');
  successButton.addEventListener('click', onCloseSuccess);
  document.addEventListener('keydown', onEscCloseSuccess);
  successNode.addEventListener('click', onOuterClickCloseSuccess);
};

//функциональное выражение используется для всплытия
//решение коллизии взаимопроникновения
function onEscCloseSuccess (evt) {
  if(isEscape(evt)) {
    onCloseSuccess();
  }
}

export { showSuccess };

