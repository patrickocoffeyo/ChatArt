/**
 * @file
 * Defines '/authenticate' route.
 */
/* globals Router */

/**
 * Create /authenticate route.
 */
Router.route('authenticate', {
  layoutTemplate: 'layoutThin',
  action: function () {
    this.render('authenticate');
  }
});
