"use strict";

var React = require('react'),
    Router = require('react-router'),
    AuthorActions = require('../../actions/authorActions'),
    toastr = require('toastr');

var Link = Router.Link;

var AuthorList = React.createClass({
  propTypes: {
    authors: React.PropTypes.array.isRequired
  },

  deleteAuthor: function(id, event) {
    event.preventDefault();
    AuthorActions.deleteAuthor(id);
    toastr.success('Author Deleted');
  },

  render: function() {
    var createAuthorRow = function(author) {
      return (
        <tr key={author.id}>
          <td><a href="#" onClick={this.deleteAuthor.bind(this, author.id)}>Delete</a></td>
          <td><Link to="editAuthor" params={{id: author.id}}>{author.id}</Link></td>
          <td>{author.firstName} {author.lastName}</td>
        </tr>
      );
    };
    return (
      <div>
        <table className="table">
          <thead>
            <th></th>
            <th>ID</th>
            <th>Name</th>
          </thead>
          <tbody>
            {this.props.authors.map(createAuthorRow, this)}
          </tbody>
        </table>        
      </div>
    );
  }
});

module.exports = AuthorList;