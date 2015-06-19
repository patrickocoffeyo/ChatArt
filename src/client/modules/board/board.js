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
      data: function () {
        return {
          boards: function() {
            return Boards.find();
          }
        }
      }
    })
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

/**
 * Route that displays a board
 */
Router.route('/boards/:_id', {
  layoutTemplate: 'layoutMain',
  waitOn: function () {
    return [
      Meteor.subscribe('board', this.params._id),
      Meteor.subscribe('polygons', this.params._id)
    ];
  },
  action: function () {
    this.render('board', {
      data: function() {
        return {
          polygons: function() {
            // Our subscription only returns polygons for the current board.
            // No need to filter here.
            return Polygons.find();
          }
        }
      }
    })
  }
});

/**
 * Provide default values to the Polygon insert form
 */
Template.board.helpers({
  defaultValues: function() {
    return {
      board: Router.current().params._id
    };
  }
});

/**
 * Create drag/drop functionality.
 */
interact('.polygon').draggable({
  inertia: true,
  onmove: function(e) {
    var $target = $(e.target),
        x = $target.data('x') + e.dx,
        y = $target.data('y') + e.dy;

    $target.css({
      left: x,
      top: y
    });

    $target.data('x', x);
    $target.data('y', y);
    Polygons.update({_id: $target.attr('id') }, { $set: { top: y, left: x } });
  }
});
