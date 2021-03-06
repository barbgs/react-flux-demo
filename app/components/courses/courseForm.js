"use strict";

var React = require('react'),
    Input = require('../common/textInput'),
    Select = require('../common/select');

var CourseForm = React.createClass({
  render: function() {
    return (
      <form>
        <h1>Edit Course</h1>
        <Input 
          name="title"
          label="Title"
          value={this.props.course.title}
          onChange={this.props.onChange} />
        <Select 
          options={this.props.authors} 
          name="author"
          value={this.props.course.author.id}
          onChange={this.props.onChange} />
        <Input 
          name="category"
          label="Category"
          value={this.props.course.category}
          onChange={this.props.onChange} />
        <Input 
          name="length"
          label="Length" 
          value={this.props.course.length}
          onChange={this.props.onChange} />
         <input type="submit" value="Save" className="btn btn-default"
          onClick={this.props.onSave} />
      </form>

    );
  }
});

module.exports = CourseForm;