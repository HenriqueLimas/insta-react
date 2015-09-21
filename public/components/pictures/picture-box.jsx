require('../bootstrap.less');

let React = require('react');

let PictureList = require('../pictures/picture-list.jsx');

module.exports = React.createClass({
  getInitialState: function() {
    return {
      pictures: [{
        author: 'Henrique', 
        src: 'images/photo-01.jpeg', 
        comments: [
          { author: 'Henrique Limas', text: 'My first comment'},
          { author: 'Henrique Limas', text: 'Second comment'},
          { author: 'Ford prefect', text: 'Another comment'}
        ]
      }, {
        author: 'Ford', 
        src: 'images/photo-02.jpeg', 
        comments: [
          { author: 'Ford prefect', text: 'Another comment'}
        ]
      }]
    }
  },
  render: function() {
    return (
      <div className="container">
        <PictureList pictures={this.state.pictures}/>
      </div>
    );
  }
});