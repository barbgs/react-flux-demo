"use strict";

var Dispatcher = require('../dispatcher/appDispatcher'),
    CourseApi = require('../api/courseApi'),
    ActionTypes = require('../constants/actionTypes');

var CourseActions = {
  createCourse: function(course) {
    var newCourse = CourseApi.saveCourse(course);

    Dispatcher.dispatch({
      actionType: ActionTypes.CREATE_COURSE, 
      course: newCourse
    });
  }
};

module.exports = CourseActions;