let React = require('react');

let PictureImg = require('./picture-img.jsx');

module.exports = React.createClass({
  render: function() {
    return (
      <div className="row">
        <div className="col-12"> 
          <PictureImg picture={this.props.picture} />
        </div>
      </div>
    );
  }
});