const SCALE_STEP = 25;
const SCALE_MIN = 25;
const SCALE_MAX = 100;
const SCALE_DEFAULT = 100;

const imgUploadScale = document.querySelector('.img-upload__scale');
const scaleControlSmaller = imgUploadScale.querySelector('.scale__control--smaller');
const scaleControlValue = imgUploadScale.querySelector('.scale__control--value');
const scaleControlBigger = imgUploadScale.querySelector('.scale__control--bigger');
const imgUploadPreview = document.querySelector('.img-upload__preview img');

let controlValue;

const resetScale = () => {
  scaleControlValue.value = `${SCALE_DEFAULT}%`;
  imgUploadPreview.style.transform = 'scale(1)';
  controlValue = parseInt(scaleControlValue.value, 10);
};

const showScaledImgPreview = (ctrlVal) => {
  scaleControlValue.value = `${ctrlVal}%`;
  imgUploadPreview.style.transform = `scale(${ctrlVal / 100})`;
};

const onScaleDecrease = () => {
  if (controlValue - SCALE_STEP > SCALE_MIN) {
    controlValue -= SCALE_STEP;
  } else {
    controlValue = SCALE_MIN;
  }
  showScaledImgPreview(controlValue);
};

const onScaleIncrease = () => {
  if (controlValue + SCALE_STEP < SCALE_MAX) {
    controlValue += SCALE_STEP;
  } else {
    controlValue = SCALE_MAX;
  }
  showScaledImgPreview(controlValue);
};

resetScale();
showScaledImgPreview(controlValue);

scaleControlSmaller.addEventListener('click', onScaleDecrease);
scaleControlBigger.addEventListener('click', onScaleIncrease);

export { scaleControlValue, imgUploadPreview, showScaledImgPreview, resetScale };
