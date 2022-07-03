const SCALE_STEP = 25;

const imgUploadScale = document.querySelector('.img-upload__scale');
const scaleControlSmaller = imgUploadScale.querySelector('.scale__control--smaller');
const scaleControlValue = imgUploadScale.querySelector('.scale__control--value');
const scaleControlBigger = imgUploadScale.querySelector('.scale__control--bigger');
const imgUploadPreview = document.querySelector('.img-upload__preview img');

let controlValue = parseInt(scaleControlValue.value, 10);

const showScaledImgPreview = (ctrlVal) => {
  scaleControlValue.value = `${ctrlVal}%`;
  imgUploadPreview.style.transform = `scale(${ctrlVal / 100})`;
};

showScaledImgPreview(controlValue);

imgUploadScale.addEventListener('click', (evt) => {
  if (evt.target === scaleControlSmaller) {
    if (controlValue - SCALE_STEP > 0) {
      controlValue -= SCALE_STEP;
    } else {
      controlValue = 0;
    }
    showScaledImgPreview(controlValue);
  }
  if (evt.target === scaleControlBigger) {
    if (controlValue + SCALE_STEP < 100) {
      controlValue += SCALE_STEP;
    } else {
      controlValue = 100;
    }
    showScaledImgPreview(controlValue);
  }
});
