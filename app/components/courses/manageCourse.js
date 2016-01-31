"use strict";

var React = require('react'),
    Router = require('react-router'),
    CourseForm = require('./courseForm'),
    CourseStore = require('../../stores/courseStore'),
    AuthorStore = require('../../stores/authorStore'),
    CourseActions = require('../../actions/courseActions');

var ManageCourse = React.createClass({
  mixins: [
    Router.Navigation
  ],
  processAuthorData: function(authors) {
    return authors.map(function(author) {
      return {
        value: author.id, 
        label: author.firstName + ' ' + author.lastName
      };
    });
  },
  getInitialState: function() {
    return {
      course: {
        title: '',
        category: '',
        author: {
          id: '',
          name: ''
        }, 
        length: ''
      },
      authors: this.processAuthorData(AuthorStore.getAllAuthors())
    };
  },
  componentWillMount: function(){
    var id = this.props.params.id;
    if(id){
      this.setState({course: CourseStore.getCourseById(id)});
    }
  },
  render: function() {
    return (
      <CourseForm 
        authors={this.state.authors}
        course={this.state.course}
        onSave={this.saveCourse}
        onChange={this.setCourseState} />
    );
  },
  saveCourse: function() {
    event.preventDefault();
    CourseActions.createCourse(this.state.course);
    this.transitionTo('courses');
  },
  setCourseState: function(event) {
    var field = event.target.name,
        value = event.target.value,
        text = '';      
    if (field === "author") {
      text = $(event.target).find("> option:selected").text();
      this.state.course[field] = {
        id: value,
        name: text
      };
    } else {
      this.state.course[field] = value;
    }
    this.setState({course: this.state.course});
  }

});

module.exports = ManageCourse;