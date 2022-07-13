import { body } from './user-modal.js';
import { isEscape } from './util.js';
import { imgUploadOverlay } from './user-form.js';

const success = document.querySelector('#success').content.querySelector('.success');
const successNode = success.cloneNode(true);
const successInner = successNode.querySelector('.success__inner');
const successButton = successNode.querySelector('.success__button');

body.appendChild(successNode);
successNode.classList.add('hidden');

const onCloseSuccess = () => {
  successNode.classList.add('hidden');
  document.removeEventListener('keydown', onEscCloseSuccess);
  document.removeEventListener('click', onOuterClickCloseSuccess);
};

const showSuccess = () => {
  successNode.classList.remove('hidden');
  imgUploadOverlay.classList.add('hidden');
  successButton.addEventListener('click', onCloseSuccess);
  document.addEventListener('keydown', onEscCloseSuccess);
  document.addEventListener('click', onOuterClickCloseSuccess);
};


//функциональное выражение используется для всплытия
//решение коллизии взаимопроникновения
function onEscCloseSuccess () {
  if(isEscape) {
    onCloseSuccess();
  }
}

//функциональное выражение используется для всплытия
//решение коллизии взаимопроникновения
function onOuterClickCloseSuccess (evt) {
  evt.preventDefault();
  if(evt.target !== successInner) {
    onCloseSuccess();
  }
}

export { showSuccess };

