require('./core/vendor.js')();

var React = require('react');

var Navbar = require('./components/navbar/navbar.jsx');
var PictureBox = require('./components/pictures/picture-box.jsx');

React.render(<Navbar appName="Insta React"/>, document.getElementById('navbar'));

React.render(<PictureBox />, document.getElementById('picture-box'));