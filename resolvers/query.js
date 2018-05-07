'use strict';

module.exports = {
  totalPhotos: (root, args, {photos}) => photos.length,
  allPhotos: (root, args, {photos}) => photos
};
