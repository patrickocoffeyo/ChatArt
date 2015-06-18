/**
 * @file
 * Defines Boards collections and helpers.
 */
/* globals Examples:true, Mongo */

// Declare Boards collection.
Boards = new Mongo.Collection('boards');

// Define schema for Boards collection.
Boards.attachSchema({
  title: {
    type: String,
    label: 'Title',
    max: 200
  },
  author: {
    type: String,
    label: 'Author',
    autoValue: function() {
      return Meteor.user()._id;
    }
  }
});

// Add helpers to Boards collection object.
Boards.helpers({
  authorObject: function() {
    return Meteor.users.findOne(this.author);
  },
  authorIsCurrentUser: function() {
    if (Meteor.user()._id === this.author) {
      return true;
    }

    return false;
  }
});
