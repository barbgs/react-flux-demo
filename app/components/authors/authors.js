"use strict";

var React = require('react'),
    Router = require('react-router'),
    AuthorList = require('./authorList'),
    AuthorActions = require('../../actions/authorActions'),
    AuthorStore = require('../../stores/authorStore');

var Link = Router.Link;

var Authors = React.createClass({
  getInitialState: function() {
    return {
      authors: AuthorStore.getAllAuthors()
    };
  },

  componentWillMount: function() {
    AuthorStore.addChangeListener(this._onChange);
  }, 
  
  componentWillUnmount: function() {
    AuthorStore.removeChangeListener(this._onChange);
  },

  _onChange: function() {
    this.setState({ authors: AuthorStore.getAllAuthors() });
  },

  render: function() {
    return (
      <div>
        <h1>Authors</h1>
        < AuthorList authors={this.state.authors} />
        <Link to="addAuthor" className="btn btn-default">Add Author</Link>
      </div>
    );
  }
});

module.exports = Authors;