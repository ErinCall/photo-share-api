'use strict';

const {v4} = require('uuid');

const postPhoto = (root, {input}, {photos}) => {
  const photo = {
    id: v4(),
    ...input
  };
  photos.push(photo);
  return photo;
};

const addUser = (root, {name}, {users}) => {
  const id = v4();
  const user = {
    id,
    name
  };
  users[id] = user;

  return user
};

module.exports = {postPhoto, addUser};
