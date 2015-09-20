require('./core/vendor.js')();

var React = require('React');

var Navbar = require('./components/navbar/navbar.jsx');

React.render(<Navbar appName="Insta React"/>, document.getElementById('navbar'));