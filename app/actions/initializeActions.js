"use strict";

var Dispatcher = require('../dispatcher/appDispatcher'),
    AuthorApi = require('../api/authorApi'),
    CourseApi = require('../api/courseApi'),
    ActionTypes = require('../constants/actionTypes');

var InitializeActions = {
  initApp: function() {
    var authors = AuthorApi.getAllAuthors(),
        courses = CourseApi.getAllCourses();

    Dispatcher.dispatch({
      actionType: ActionTypes.INITIALIZE,
      initialData: {
        authors: authors,
        courses: courses
      }
    });
  }

};

module.exports = InitializeActions;