"use strict";

var React = require('react'),
    AuthorForm = require('./authorForm'),
    Router = require('react-router'),
    AuthorActions = require('../../actions/authorActions'),
    AuthorStore = require('../../stores/authorStore'),
    toastr = require('toastr');

var ManageAuthor = React.createClass({
  mixins: [
    Router.Navigation
  ],
  statics: {
    willTransitionFrom: function(transition, component) {
      if (component.state.dirty && !confirm('Are you sure you want to leave this page?')) {
        transition.abort();
      }
    }
  },
  getInitialState: function() {
    return {
      author: { 
        id: '',
        firstName: '',
        lastName: ''
      },
      errors: {},
      dirty: false
    };
  },

  componentWillMount: function() {
    var authorId = this.props.params.id;
    if (authorId) {
      this.setState({author: AuthorStore.getAuthorById(authorId)});
    }
  },

  setAuthorState: function(event) {
    this.setState({dirty: true});
    var field = event.target.name,
        value = event.target.value;
    this.state.author[field] = value;
    return this.setState({author: this.state.author});
  },
  authorFormsIsValid: function() {
    var isValid = true;
    this.state.errors = {};

    if (this.state.author.firstName.length < 3) {
      this.state.errors.firstName = 'First Name must be at least 3 chars.';
      isValid = false;
    }

    if (this.state.author.lastName.length < 3) {
      this.state.errors.lastName = 'Last Name must be at least 3 chars.';
      isValid = false;
    }

    this.setState({errors: this.state.errors});
    return isValid;
  },
  saveAuthor: function(event) {
    event.preventDefault();

    if (!this.authorFormsIsValid()) {
      return;
    }
    if (this.state.author.id) {
      AuthorActions.editAuthor(this.state.author);  
    } else {
      AuthorActions.createAuthor(this.state.author);
    }

    this.setState({dirty: false});
    toastr.success('Author Saved.');
    this.transitionTo('authors');
  },

  render: function() {
    return (
      <AuthorForm 
        author={this.state.author}
        onChange={this.setAuthorState}
        onSave={this.saveAuthor}
        errors= {this.state.errors} />
    );
  }
});

module.exports = ManageAuthor;