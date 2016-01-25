"use strict";

var React = require('react'),
    Router = require('react-router'),
    InitializeActions = require('./actions/initializeActions'),
    routes = require('./routes');

InitializeActions.initApp();

Router.run(routes, function(Handler) {
  React.render(<Handler />, document.getElementById('app'));
});