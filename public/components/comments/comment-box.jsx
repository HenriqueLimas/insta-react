var React = require('react');

var CommentList = require('./comment-list.jsx');

module.exports = React.createClass({
  render: function() {
    return (
      <div className="row">
        <h4>Comments</h4>
        <CommentList comments={this.props.comments}/>
        <hr />
      </div>
    );
  }
});