require('./navbar.less');

var React = require('react');

module.exports = React.createClass({
  render: function() {
    return (
      <div className="navbar-header">
        <button type="button"
                className="navbar-toggle collapsed"
                data-toggle="collapse"
                data-target="#bs-example-navbar-collapse-1"
                aria-expanded="false">
          <span className="sr-only">Toggle navigation</span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
        </button>
        {this.props.children}
      </div>
    );
  }
})