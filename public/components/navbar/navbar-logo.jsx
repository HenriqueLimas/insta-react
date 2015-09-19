require('./navbar.less');

var React = require('React');

module.exports = React.createClass({
  render: function() {
    return (
      <a className="navbar-brand" href="#">{this.props.appName}</a>
    );
  }
})