require('./navbar.less');

var React = require('react');

module.exports = React.createClass({
  render: function() {
    return (
      <div className="container-fluid">
        {this.props.children}
      </div>
    );
  }
})

