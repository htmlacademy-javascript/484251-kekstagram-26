import { renderThumbnails } from './thumbnails.js';
import { createPhotos } from './data.js';

const pictures = createPhotos();
renderThumbnails(pictures);
