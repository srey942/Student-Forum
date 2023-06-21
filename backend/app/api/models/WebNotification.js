/**
 * User.js
 *
 * @description :: A model definition represents a notification Object.
 *
 */

module.exports = {

  attributes: {
    email: {
      type: 'string',
      required: true,
      unique: true
    },
    title: {
      type: 'string',
      required: true
    },
    body: {
      type: 'string',
      required: true
    }
  }

};