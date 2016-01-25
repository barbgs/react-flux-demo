"use strict";

var React = require('react');

var CourseList = React.createClass({
  render: function() {
    var createCourseRow = function(course) {
      return (
        <tr key={course.id}>
          <td><a href={course.watchHref}>Watch</a></td>
          <td>Delete</td>
          <td>{course.title}</td>
          <td>{course.author.name}</td>
          <td>{course.category}</td>
          <td>{course.length}</td>
        </tr>
      );
    };

    return (
      <div>
        <table className="table">
          <thead>
            <th></th>
            <th></th>
            <th>Title</th>
            <th>Author</th>
            <th>Category</th>
            <th>Length</th>
          </thead>
          <tbody>
             {this.props.courses.map(createCourseRow, this)}     
          </tbody>
        </table>        
      </div>
    );
  }
});

module.exports = CourseList;