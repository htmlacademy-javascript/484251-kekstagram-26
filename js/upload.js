import { SCALE_DEFAULT, scaleControlValue, imgUploadPreview,showScaledImgPreview } from './scale.js';
import { applyNoneEffect  } from './effects.js';

const imgUploadControl = document.querySelector('.img-upload__control');

const onUploadFile = () => {
  scaleControlValue.value =  `${SCALE_DEFAULT}%`;
  imgUploadPreview.style.transform = 'scale(1)';
  showScaledImgPreview(parseInt(scaleControlValue.value, 10));
  applyNoneEffect();
};

imgUploadControl.addEventListener('click', onUploadFile);

