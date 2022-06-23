import {createPhotos} from './data.js';
import {renderThumbnails} from './thumbnails.js';
import {renderFullsize} from './fullsize.js';

const dataPhotos = createPhotos();
renderThumbnails(dataPhotos);
console.log(dataPhotos);

const listThumbnails = document.querySelectorAll('.picture');

for (let i = 0; i < listThumbnails.length; i++) {
  renderFullsize(listThumbnails[i], dataPhotos[i]);
}
