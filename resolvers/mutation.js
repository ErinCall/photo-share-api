'use strict';

const {v4} = require('uuid');

module.exports = {
  postPhoto: (root, {input}, {photos}) => {
    const photo = {
      id: v4(),
      ...input
    };
    photos.push(newPhoto);
    return newPhoto;
  }
};
