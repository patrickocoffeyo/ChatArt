/**
 * @file
 * Defines '/' route.
 */
/* globals Router, Meteor, Examples */

Router.route('/boards', {
  // Wait until subscription has been created and the client has data.
  waitOn: function () {
    return Meteor.subscribe('board');
  },

  // Render the 'example' template.
  action: function () {
    this.render('boardList', {
      // Pass example documents into the template.
      data: function () {
        return {
          boards: function() {
            return Boards.find();
          }
        };
      }
    });
  }
});

