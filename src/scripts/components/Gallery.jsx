var React = require('react'),
	URL = require('./../URL'),
	UserToken = require('./../UserToken');

// Components
var	Image = require('./Image.jsx'),
	MoreButton = require('./MoreButton.jsx');

var Gallery = React.createClass({

	styles: {
		width: 800,
		margin: '0 auto 5em',
		display: 'flex',
		flexWrap: 'wrap'
	},

	getInitialState() {
		return {
			photos: [],
			URL: URL.base + URL.userLikes + URL.accessToken +
			UserToken.key + URL.count + this.props.count
		}
	},

	makeRequest(URL) {
		var thisComponent = this;
		JSONP.get(URL, function(response) {
			thisComponent.processResponse(response);
		});
	},

	processResponse(response) {
		var nextPhotos = this.state.photos.concat(response.data),
			nextURL = response.pagination.next_url;

		this.setState({
			photos: nextPhotos,
			URL: nextURL
		});
	},

	loadMore() {
		this.makeRequest(this.state.URL);
	},

	componentDidMount() {
		this.makeRequest(this.state.URL);
	},

	render() {
		var images = this.state.photos.map(function(photo) {
			return (
				<Image data={photo} />
			)
		});

		return (
			<div style={this.styles}>
				{images}
				<MoreButton onClick={this.loadMore} />
			</div>
		);
	}
});

module.exports = Gallery;
