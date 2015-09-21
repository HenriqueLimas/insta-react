var React = require('react');

var Picture = require('../pictures/picture.jsx');
var CommentBox = require('../comments/comment-box.jsx');

module.exports = React.createClass({
  render: function() {
    let pictureListNode = this.props.pictures.map((picture, key) => {
      return (
        <div key={key} className="row">
          <Picture picture={picture}/>
          <CommentBox comments={picture.comments}/>
        </div>
      );
    });

    return (
      <div>
        {pictureListNode}
      </div>
    );
  }
});