import { imgUploadPreview } from './scale.js';

const effectLevelSlider = document.querySelector('.effect-level__slider');
const effectsList = document.querySelector('.effects__list');
const effectNone = effectsList.querySelector('#effect-none');
const effectChrome = effectsList.querySelector('#effect-chrome');
const effectSepia = effectsList.querySelector('#effect-sepia');
const effectMarvin = effectsList.querySelector('#effect-marvin');
const effectPhobos = effectsList.querySelector('#effect-phobos');
const effectHeat = effectsList.querySelector('#effect-heat');

const onEffectChange = (evt) => {
  if (evt.target === effectNone) {
    imgUploadPreview.classList = '';
    imgUploadPreview.classList.add('effects__preview--none');
    imgUploadPreview.style.filter = null;
    effectLevelSlider.setAttribute('disabled', true);
    // effectLevelSlider.noUiSlider.destroy();
  }
  if (evt.target === effectChrome) {
    imgUploadPreview.classList = '';
    imgUploadPreview.classList.add('effects__preview--chrome');
    effectLevelSlider.noUiSlider.updateOptions({
      range: {
        min: 0,
        max: 1,
      },
      start: 1,
      step: 0.1,
    });
    effectLevelSlider.noUiSlider.on('update', () => {
      imgUploadPreview.style.filter = `grayscale(${effectLevelSlider.noUiSlider.get()})`;
    });
  }
  if (evt.target === effectSepia) {
    imgUploadPreview.classList = '';
    imgUploadPreview.classList.add('effects__preview--sepia');
    effectLevelSlider.noUiSlider.updateOptions({
      range: {
        min: 0,
        max: 1,
      },
      start: 1,
      step: 0.1,
    });
    effectLevelSlider.noUiSlider.on('update', () => {
      imgUploadPreview.style.filter = `sepia(${effectLevelSlider.noUiSlider.get()})`;
    });
  }
  if (evt.target === effectMarvin) {
    imgUploadPreview.classList = '';
    imgUploadPreview.classList.add('effects__preview--marvin');
    effectLevelSlider.noUiSlider.updateOptions({
      range: {
        min: 0,
        max: 100,
      },
      start: 100,
      step: 1,
    });
    effectLevelSlider.noUiSlider.on('update', () => {
      imgUploadPreview.style.filter = `invert(${effectLevelSlider.noUiSlider.get()}%)`;
    });
  }
  if (evt.target === effectPhobos) {
    imgUploadPreview.classList = '';
    imgUploadPreview.classList.add('effects__preview--phobos');
    effectLevelSlider.noUiSlider.updateOptions({
      range: {
        min: 0,
        max: 3,
      },
      start: 3,
      step: 0.1,
    });
    effectLevelSlider.noUiSlider.on('update', () => {
      imgUploadPreview.style.filter = `blur(${effectLevelSlider.noUiSlider.get()}px)`;
    });
  }
  if (evt.target === effectHeat) {
    imgUploadPreview.classList = '';
    imgUploadPreview.classList.add('effects__preview--heat');
    effectLevelSlider.noUiSlider.updateOptions({
      range: {
        min: 1,
        max: 3,
      },
      start: 3,
      step: 0.1,
    });
    effectLevelSlider.noUiSlider.on('update', () => {
      imgUploadPreview.style.filter = `brightness(${effectLevelSlider.noUiSlider.get()})`;
    });
  }
};

noUiSlider.create(effectLevelSlider, {
  range: {
    min: 0,
    max: 1,
  },
  start: 1,
  step: 0.1,
  connect: 'lower',
  format: {
    to: function (value) {
      if (Number.isInteger(value)) {
        return value.toFixed(0);
      }
      return value.toFixed(1);
    },
    from: function (value) {
      return parseFloat(value);
    },
  },
});

effectsList.addEventListener('change', onEffectChange);
