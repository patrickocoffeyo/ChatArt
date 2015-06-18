/**
 * @file
 * Defines Polygon collections and helpers.
 */
/* globals Boards:true, Mongo */

// Declare Boards collection.
Polygons = new Mongo.Collection('polygons');

// Define schema for Boards collection.
Polygons.attachSchema({
  opacity: {
    type: String,
    label: 'Opacity',
    max: 3,
    defaultValue: 0
  },
  backgroundColor: {
    type: String,
    label: 'Background Color',
    defaultValue: 'FFFFFF',
    autoform: {
      type: 'color'
    }
  },
  width: {
    type: String,
    label: 'Width',
    max: 3,
    defaultValue: 100
  },
  height: {
    type: String,
    label: 'Height',
    max: 3,
    defaultValue: 100
  },
  top: {
    type: String,
    label: 'Top',
    max: 5,
    defaultValue: 0
  },
  left: {
    type: String,
    label: 'Left',
    max: 5,
    defaultValue: 0
  },
  board: {
    type: String,
    label: 'Board'
  },
  author: {
    type: String,
    label: 'Author',
    autoValue: function() {
      return Meteor.user()._id;
    }
  }
});
