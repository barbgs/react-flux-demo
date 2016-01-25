"use strict";

var React = require('react'),
    Router = require('react-router');

var DefaultRoute = Router.DefaultRoute,
    Route = Router.Route,
    NotFound = Router.NotFoundRoute,
    Redirect = Router.Redirect;

var routes = (
  <Route name="app" path="/" handler={require('./components/app')}>
    <DefaultRoute handler={require('./components/home')} />
    <Route name="authors" handler={require('./components/authors/authors')} />
    <Route name="editAuthor" path="author/:id" handler={require('./components/authors/manageAuthor')} />
    <Route name="addAuthor" path="author" handler={require('./components/authors/manageAuthor')} />
    <Route name="courses" handler={require('./components/courses/courses')} />
    <Route name="addCourse" handler={require('./components/courses/manageCourse')} />
    <Route name="about" handler={require('./components/about/about')} />
    <NotFound handler={require('./components/404')} />
    <Redirect from="about-us" to="about"/>
    <Redirect from="about/*" to="about"/>
  </Route>
);

module.exports = routes;