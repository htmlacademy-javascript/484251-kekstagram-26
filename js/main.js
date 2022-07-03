import { renderThumbnails } from './thumbnails.js';
import { createPhotos } from './data.js';
import './validation.js';
import './scale.js';

const pictures = createPhotos();
renderThumbnails(pictures);
