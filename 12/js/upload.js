import { scaleControlValue, showScaledImgPreview, resetScale } from './scale.js';
import { imgUploadPreview } from './scale.js';
import { applyNoneEffect } from './effects.js';
import { uploadFile } from './user-form.js';

const FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];

const imgUploadControl = document.querySelector('.img-upload__control');
const effectsPreview = document.querySelectorAll('.effects__preview');

const onUploadFile = () => {
  resetScale();
  showScaledImgPreview(parseInt(scaleControlValue.value, 10));
  applyNoneEffect();
};

uploadFile.addEventListener('change', () => {
  const file = uploadFile.files[0];
  const fileName = file.name.toLowerCase();

  const matches = FILE_TYPES.some((it) => fileName.endsWith(it));

  if (matches) {
    imgUploadPreview.src = URL.createObjectURL(file);
    effectsPreview.forEach((effectPreview) => {
      effectPreview.style.backgroundImage = `url(${URL.createObjectURL(file)})`;
    });
  }
});

imgUploadControl.addEventListener('click', onUploadFile);
