"use strict";

var Dispatcher = require('../dispatcher/appDispatcher'),
    assign = require('object-assign'),
    ActionTypes = require('../constants/actionTypes'),
    _ = require('lodash'),
    EventEmitter = require('events').EventEmitter;

var CHANGE_EVENT = 'change',
    _authors = [];

var AuthorStore = assign({}, EventEmitter.prototype, {
  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  },

  emitChange: function() {
    this.emit(CHANGE_EVENT);
  }, 
  getAllAuthors: function() {
    return _authors;
  },
  getAuthorById: function(id) {
    return _.find(_authors, {id: id});
  }
});

Dispatcher.register(function(action) {
  switch(action.actionType) {
    case ActionTypes.CREATE_AUTHOR:
      _authors.push(action.author);
      AuthorStore.emitChange();
      break;
    case ActionTypes.INITIALIZE:
      _authors = action.initialData.authors;
      AuthorStore.emitChange();
      break;
    case ActionTypes.EDIT_AUTHOR:
      var existingAuthor = _.find(_authors, {id: action.author.id}),
          existingAuthorIndex = _.indexOf(_authors, existingAuthor);
      _authors.splice(existingAuthorIndex, 1, action.author);
      AuthorStore.emitChange();
      break;
    case ActionTypes.DELETE_AUTHOR:
      _.remove(_authors, function(author) {
        return action.id === author.id;
      });
      AuthorStore.emitChange();
      break;
    default:
      // no op
  }
});

module.exports = AuthorStore;