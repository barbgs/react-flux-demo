"use strict";

var React = require('react'),
    CourseForm = require('./courseForm');

var ManageCourse = React.createClass({
  render: function() {
    return (
      <CourseForm />
    );
  }
});

module.exports = ManageCourse;