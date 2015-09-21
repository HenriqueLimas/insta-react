let React = require('react');

module.exports = React.createClass({
  render: function() {
    let picture = this.props.picture;
    let imgStyle = {
      maxWidth: '100%'
    };

    return (
      <img className="img-rounded" 
           alt={"Photo by " + picture.author}
           src={picture.src}
           style={imgStyle}/>
    );
  }
});