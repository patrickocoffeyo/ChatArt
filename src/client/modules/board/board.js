/**
 * @file
 * Defines board-related routes.
 */
/* globals Router, Meteor, Boards */

/**
 * Route that lists available boards.
 */
Router.route('/boards', {
  // Wait until subscription has been created and the client has data.
  waitOn: function () {
    return Meteor.subscribe('boards');
  },
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

/**
 * Route that allows someone to create a board.
 */
Router.route('/boards/create', {
  action: function () {
    this.render('boardCreate');
  }
});

/**
 * Implements Autoform.addHooks.
 * Redirects to /boards after board is created.
 */
AutoForm.addHooks(['insertBoardsForm'], {
  onSuccess: function(operation, result, template) {
    Router.go('/boards');
  }
});
