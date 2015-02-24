import React from 'react';
import URL from './../URL';
import UserToken from './../UserToken';

// Components
import Image from './Image.jsx';
import MoreButton from './MoreButton.jsx';
import ImageModal from './ImageModal.jsx';

var Gallery = React.createClass({

	styles: {
		width: 800,
		margin: '0 auto 3em',
		display: 'flex',
		flexWrap: 'wrap'
	},

	getInitialState() {
		return {
			photos: [],
			URL: URL.base + URL.userLikes + URL.accessToken +
			UserToken.key + URL.count + this.props.count,
			modalPhotoURL: ''
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

	showModal(photoURL) {
		this.setState({
			modalPhotoURL: photoURL
		});
	},

	closeModal() {
		this.setState({
			modalPhotoURL: ''
		});
	},

	render() {
		var thisComponent = this,
			images = this.state.photos.map(function(photo) {
			return (
				<Image data={photo}
					onClick={thisComponent.showModal.bind(null, photo.images.standard_resolution.url)} />
			)
		});

		return (
			<div style={this.styles}>
				{images}
				<MoreButton onClick={this.loadMore} />
				<ImageModal photoURL={this.state.modalPhotoURL}
					onRequestClose={this.closeModal}/>
			</div>
		);
	}
});

export default Gallery;
