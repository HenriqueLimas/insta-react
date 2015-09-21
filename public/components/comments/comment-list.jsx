var React = require('react');

var Comment = require('./comment.jsx');

module.exports = React.createClass({
  render: function() {
    let commentsNode = this.props.comments.map((comment, key) => {
      return (
        <Comment key={key} author={comment.author} text={comment.text} />
      );
    });

    return (
      <div>
        {commentsNode}
      </div>
    );
  }
});