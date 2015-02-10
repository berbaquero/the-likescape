var React = require('react'),
	URL = require('./URL'),
	// Components
	Image = require('./Image.jsx'),
	UserToken = require('./UserToken');

var Gallery = React.createClass({

	getInitialState() {
		return {
			photos: []
		}
	},

	componentDidMount() {
		var thisComponent = this,
			requestURL = URL.base +
				URL.userLikes +
				URL.accessToken +
				UserToken.key +
				URL.count +
				this.props.count;

		// Make Request
		JSONP.get(requestURL, function(response) {
			thisComponent.setState({
				photos: response.data
			});
		});
	},

	render() {
		var images = this.state.photos.map(function(photo) {
			return (
				<Image source={photo.images.standard_resolution.url}
					title={photo.caption ? photo.caption.text : ''} />
			)
		});

		return (
			<div style={styles}>
				{images}
			</div>
		);
	}
});

var styles = {
	width: 640,
	margin: '0 auto'
};

module.exports = Gallery;
