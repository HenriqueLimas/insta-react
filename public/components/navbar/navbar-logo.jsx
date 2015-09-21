require('./navbar.less');

var React = require('react');

module.exports = React.createClass({
  render: function() {
    return (
      <a className="navbar-brand" href="#">{this.props.appName}</a>
    );
  }
})