require('../bootstrap.less');

let React = require('react');

let PictureList = require('../pictures/picture-list.jsx');
let ajax = require('../../core/utils/ajax.js');

module.exports = React.createClass({
  getInitialState() {
    return {
      pictures: []
    };
  },
  loadPicturesFromServer() {
    ajax({
      method:'GET',
      url: '//localhost:3000/pictures'
    }).then((pictures) => {
      this.setState({
        pictures
      });
    });
  },
  componentDidMount() {
    this.loadPicturesFromServer();
  },
  render() {
    return (
      <div className="container">
        <PictureList pictures={this.state.pictures}/>
      </div>
    );
  }
});