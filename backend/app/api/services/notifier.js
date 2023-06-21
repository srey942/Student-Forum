/**
 * mailer.js
 *
 * @description :: Notifier logic for triggering e-mail.
 *
 */



module.exports.sendNotification = function(obj) {
  process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = '0'

  // Binds the user data dynamically to email template.
  sails.hooks.email.send(
    "notify", {
      Name: obj.name,
      Owner: obj.owner,
      groupName: obj.group,
      Title: obj.title
    }, {
      to: obj.email,
      subject: "New Discussion Posted"
    },
    function(err) {
      if (err) {
        console.log("Notififer",err);
      } else {
      }
    }
  )
};