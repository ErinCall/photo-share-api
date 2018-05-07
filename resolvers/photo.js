'use strict';

module.exports = {
  url: root => `/img/photos/${root.id}.jpg`,
  postedBy: ({userID}, args, {users}) => users[userID]
}
