'use strict';

const {v4} = require('uuid');

const postPhoto = (root, {input}, {photos, user}) => {
  const photo = {
    id: v4(),
    userID: user.id,
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
