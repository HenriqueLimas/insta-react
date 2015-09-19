require('./navbar.less');

var React = require('React');

var NavbarLogo = require('./navbar-logo.jsx');

module.exports = React.createClass({
  render: function() {
    return (
      <div className="navbar navbar-default">
        <div className="container-fluid">
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
            <NavbarLogo appName={this.props.appName} />
          </div>
        </div>
      </div>
    );
  }
})
