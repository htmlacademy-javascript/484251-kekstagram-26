import { scaleControlValue, showScaledImgPreview, resetScale } from './scale.js';
import { applyNoneEffect  } from './effects.js';

const imgUploadControl = document.querySelector('.img-upload__control');

const onUploadFile = () => {
  resetScale();
  showScaledImgPreview(parseInt(scaleControlValue.value, 10));
  applyNoneEffect();
};

imgUploadControl.addEventListener('click', onUploadFile);

