"use strict";

var React = require('react');

var Select = React.createClass({
  propTypes: {
    options: React.PropTypes.array.isRequired,
    name: React.PropTypes.string.isRequired,
    value: React.PropTypes.string
  },
  render: function() {
    var createOptions = function(option) {
      return (
        <option key={option.value} value={option.value}>{option.label}</option>
      );
    };

    return (
      <select 
        value={this.props.value} 
        name={this.props.name} onChange={this.props.onChange}>
        {this.props.options.map(createOptions, this)}
      </select>
    );
  }
});

module.exports = Select;