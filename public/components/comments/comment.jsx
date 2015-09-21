require('../panels/panels.less');

var React = require('react');

module.exports = React.createClass({
  render: function() {
    return (
      <div className="panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title">
            {this.props.author}
          </h3>
        </div>
        <div className="panel-body">
          {this.props.text}
        </div>
      </div>
    );
  }
});