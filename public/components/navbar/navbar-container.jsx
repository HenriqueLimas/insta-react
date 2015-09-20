require('./navbar.less');

var React = require('React');

module.exports = React.createClass({
  render: function() {
    return (
      <div className="container-fluid">
        {this.props.children}
      </div>
    );
  }
})

