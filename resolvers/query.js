'use strict';

const {findBy} = require('../lib');

module.exports = {
  totalPhotos: (root, args, {photos}) => photos.length,
  allPhotos: (root, args, {photos}) => photos,
  Photo: (root, args, ctx) => findBy(args.id, ctx.photos),

  totalUsers: (root, args, {users}) => Object.keys(users).length,
  allUsers: (root, args, {users}) => Object.values(users),
  User: (root, args, {users}) => users[args.id]
};
