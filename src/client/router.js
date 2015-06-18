/**
 * @file
 * Contains global router configurations.
 */
/* globals Router */

Router.configure({
  layoutTemplate: 'layoutMain'
});

// If a user has no session, then direct them to the authentication page.
Router.before(function () {
  if (!Meteor.userId()) {
    this.redirect('authenticate');
    this.stop();
  }
  this.next();
}, {except: ['authenticate']});

// Define a main route that directs to another accordingly.
Router.route('/', {
  action: function () {
    if (!Meteor.userId()) {
      this.redirect('authenticate');
    }
    else {
      this.redirect('boards');
    }
  }
});

AutoForm.addHooks(['insertBoardsForm'], {
  onSuccess: function(operation, result, template) {
    Router.go('/boards');
  }
});
