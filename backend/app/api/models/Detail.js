/**
 * Courses.js
 *
 * @description :: Model definition for comments under a particular discussion.
 */

module.exports = {

  attributes: {
    postId: {
      type: "String",
      required: true
    },
    content: {
      type: "String",
      required: true
    },
    email: {
      type: 'string',
      required: true,
    },
    isannonymous: {
      type: 'boolean',
      required: true
    }

  }
}