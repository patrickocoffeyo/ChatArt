/**
 * @file
 * Define allow and publish functions for Polygons collection.
 */
/* globals Meteor, Polygons */

var ownsDocument = function(userId, doc) {
  return doc && doc.author === userId;
}

Polygons.allow({
  insert: function() {
    return true;
  },
  update: function() {
    return true;
  },
  remove: function() {
    return true;
  }
});

/**
 * Returns polygons belonging to a board.
 */
Meteor.publish('polygons', function(board) {
  return Polygons.find({board: board});
});
