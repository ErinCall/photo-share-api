'use strict';

const _ = require('lodash');

module.exports = {
  postedPhotos: (root, args, ctx) =>
    _.filter(ctx.photos, photo => photo.userID === root.id)
};

/*
1. Add a user type
2. add some sample data
  * look for users.json
  * look for photos.json
3. allUsers query
4. User(id:ID!) query
*/
