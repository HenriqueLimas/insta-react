require('./core/vendor.js')();

var React = require('react');

var Navbar = require('./components/navbar/navbar.jsx');
var CommentBox = require('./components/comments/comment-box.jsx');

React.render(<Navbar appName="Insta React"/>, document.getElementById('navbar'));

React.render(<CommentBox comments={[{author: 'Henrique', text: 'First comment'}]}/>, document.getElementById('comments'));