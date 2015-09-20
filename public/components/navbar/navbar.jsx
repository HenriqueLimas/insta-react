require('./navbar.less');

var React = require('React');

var NavbarContainer = require('./navbar-container.jsx');
var NavbarHeader = require('./navbar-header.jsx');
var NavbarLogo = require('./navbar-logo.jsx');

module.exports = React.createClass({
  render: function() {
    return (
      <div className="navbar navbar-default navbar-fixed-top">
        <NavbarContainer>
          <NavbarHeader>
            <NavbarLogo appName={this.props.appName} />
          </NavbarHeader>
        </NavbarContainer>
      </div>
    );
  }
})
