/**
 * @file
 * Define allow and publish functions for Boards collection.
 */
/* globals Meteor, Examples */

Meteor.startup(function() {
  Boards.allow({
    insert: function(userId, example) {
      return true;
    },
    update: function(userId, example) {
      return true;
    },
    remove: function(userId, example) {
      return true;
    }
  });
});

Meteor.publish('boards', function() {
  return Boards.find();
});
