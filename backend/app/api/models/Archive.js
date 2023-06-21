/**
 * Archive.jss
 *
 * @description :: Model to describe discussion post archived by the user.
 */

module.exports = {

  attributes: {
    email: {
      type: 'string',
      required: true,
      unique: true,
    },
    postID: {
      type: 'number',
      required: true
    },
  },

};