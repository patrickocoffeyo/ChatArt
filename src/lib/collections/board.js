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
    type: Meteor.user,
    label: 'Author',
  }
});
