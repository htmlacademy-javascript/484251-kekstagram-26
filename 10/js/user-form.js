import { body } from './user-modal.js';
import { sendData } from './api.js';
import { showError } from './error.js';
import { showSuccess } from './success.js';
import { isEscape, checkStringLength } from './util.js';

const MAX_QUANTITY_HASHTAGS = 5;
const MAX_LENGTH_COMMENT = 140;

const MessagesErrors = {
  INVALID_HASHTAG: 'Невалидный хэш-тег',
  NOT_UNIQUE_HASHTAGS: 'Хэш-теги нельзя дублировать',
  INCORRECT_QUANTITY_HASHTAGS: 'Хэш-тегов не может быть больше пяти',
  INCORRECT_LENGTH_COMMENT: 'Длина комментария превышает 140 символов'
};

const imgUploadForm = document.querySelector('.img-upload__form');
const uploadFile = document.querySelector('#upload-file');
const imgUploadOverlay = document.querySelector('.img-upload__overlay');
const uploadCancel = imgUploadOverlay.querySelector('#upload-cancel');
const uploadSubmit = imgUploadOverlay.querySelector('#upload-submit');
const textHashTags = imgUploadOverlay.querySelector('.text__hashtags');
const textDescription = imgUploadOverlay.querySelector('.text__description');

const blockSubmitButton = () => {
  uploadSubmit.disabled = true;
  uploadSubmit.textContent = 'Публикую...';
};

const unblockSubmitButton = () => {
  uploadSubmit.disabled = false;
  uploadSubmit.textContent = 'Опубликовать';
};

const closeEditForm = () => {
  imgUploadOverlay.classList.add('hidden');
  body.classList.remove('modal-open');
  imgUploadForm.reset();
  document.removeEventListener('keydown', onEditFormEscKeyDown);
};

const onFocusInputPressEsc = (evt) => {
  if(isEscape(evt)) {
    evt.stopPropagation();
  }
};

const validateHashTags = (value) => {
  const re = /^#[A-Za-zА-Яа-яЁё0-9]{1,19}$/;
  const hashTags = value.toLowerCase().trim().split(' ');
  return value === '' || hashTags.every((hashTag) => re.test(hashTag));
};

const validateUniqueHashTags = (value) => {
  const hashTags = value.toLowerCase().trim().split(' ');
  return hashTags.length === new Set(hashTags).size;
};

const validateQuantityHashTags = (value) => {
  const hashTags = value.toLowerCase().trim().split(' ');
  return hashTags.length <= MAX_QUANTITY_HASHTAGS;
};

const validateLengthComment = (value) => value.length === 0 || checkStringLength(value, MAX_LENGTH_COMMENT);

const pristine = new Pristine(imgUploadForm, {
  classTo: 'img-upload__form',
  errorTextParent: 'img-upload__field-wrapper'
});

pristine.addValidator(textHashTags, validateHashTags,  MessagesErrors.INVALID_HASHTAG);
pristine.addValidator(textHashTags, validateUniqueHashTags, MessagesErrors.NOT_UNIQUE_HASHTAGS);
pristine.addValidator(textHashTags, validateQuantityHashTags, MessagesErrors.INCORRECT_QUANTITY_HASHTAGS);
pristine.addValidator(textDescription, validateLengthComment, MessagesErrors.INCORRECT_LENGTH_COMMENT);

document.addEventListener('keydown', onEditFormEscKeyDown);

const setUserFormSubmit = (onSuccess) => {
  imgUploadForm.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const isValid = pristine.validate();
    if (isValid) {
      blockSubmitButton();
      sendData(
        () => {
          onSuccess();
          showSuccess();
          unblockSubmitButton();
        },
        () => {
          showError();
          unblockSubmitButton();
        },
        new FormData(evt.target),
      );
    }
  });
};

uploadFile.addEventListener('change', () => {
  imgUploadOverlay.classList.remove('hidden');
  body.classList.add('modal-open');
});

uploadCancel.addEventListener('click', () => {
  closeEditForm();
});

textHashTags.addEventListener('keydown', onFocusInputPressEsc);
textDescription.addEventListener('keydown', onFocusInputPressEsc);

//функциональное выражение используется для всплытия
//решение коллизии взаимопроникновения
function onEditFormEscKeyDown (evt) {
  if(isEscape(evt)) {
    closeEditForm();
  }
}

export { setUserFormSubmit, closeEditForm, imgUploadOverlay };
