"use strict";

var React = require('react'),
    Router = require('react-router'),
    CourseList = require('./courseList'),
    CourseStore = require('../../stores/courseStore');

var Link = Router.Link;

var Courses = React.createClass({
  getInitialState: function() {
    return { 
      courses: CourseStore.getAllCourses() 
    };  
  },

  componentWillMount: function() {
    CourseStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function() {
    CourseStore.removeChangeListener(this._onChange);
  },

  _onChange: function() {
    this.setState({courses: CourseStore.getAllCourses()});
  },
  
  render: function() {
    return (
      <div>
        <h1>Courses</h1>
        <CourseList courses={this.state.courses}/>
        <Link to="addCourse" className="btn btn-default">Add Course</Link>
      </div>
    );
  }
});

module.exports = Courses;

