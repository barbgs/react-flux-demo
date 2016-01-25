"use strict";
var Dispatcher = require('../dispatcher/appDispatcher'),
    assign = require('object-assign'),
    ActionTypes = require('../constants/actionTypes'),
    _ = require('lodash'),
    EventEmitter = require('events').EventEmitter;

var CHANGE_EVENT = 'change',
    _courses = [];

var CourseStore = assign({}, EventEmitter.prototype, {
  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },
  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  },
  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },
  getAllCourses: function() {
    return _courses;
  }
});

Dispatcher.register(function(action){
  switch (action.actionType) {
    case ActionTypes.INITIALIZE: 
      _courses = action.initialData.courses;
      break;
    default:
  }
});

module.exports = CourseStore;
