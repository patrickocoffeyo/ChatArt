/**
 * @file
 * Define allow and publish functions for Boards collection.
 */
/* globals Meteor, Boards */
var ownsDocument = function(userId, doc) {
  return doc && doc.author === userId;
}
Boards.allow({
  insert: function() {
    return true;
  },
  update: ownsDocument,
  remove: ownsDocument
});

Meteor.publish('boards', function() {
  return Boards.find();
});
