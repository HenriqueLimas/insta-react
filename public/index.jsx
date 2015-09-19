require('./core/vendor.js')();

var React = require('React');

var NavBar = require('./components/navbar/navbar.jsx');

React.render(<NavBar/>, document.getElementById('content'));