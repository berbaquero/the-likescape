import React from 'react';
import URL from './../URL';
import UserToken from './../UserToken';

// Components
import Image from './Image.jsx';
import MoreButton from './MoreButton.jsx';
import ImageModal from './ImageModal.jsx';

const Gallery = React.createClass({

	getInitialState() {
		return {
			photos: [],
			URL: URL.base + URL.userLikes + URL.accessToken + UserToken.key + URL.count + this.props.count,
			modalPhotoData: '',
			showMoreButton: false,
			moreButtonText: 'Load More'
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
			URL: nextURL,
			showMoreButton: true,
			moreButtonText: 'Load More'
		});
	},

	loadMore() {
		this.setState({
			moreButtonText: 'Loading...'
		});
		this.makeRequest(this.state.URL);
	},

	componentDidMount() {
		this.makeRequest(this.state.URL);
	},

	showModal(photoURL) {
		this.setState({
			modalPhotoData: photoURL
		});
	},

	closeModal() {
		this.setState({
			modalPhotoData: ''
		});
	},

	render() {
		const thisComponent = this,
			zoomClass = 'zoom-' + thisComponent.props.zoom;

		return (
			<div className={'gallery ui-flx-wrap ' + zoomClass}>
				{this.state.photos.map(function(photo, index) {
					return (
						<Image data={photo}
							   onClick={thisComponent.showModal.bind(null, photo)}
							   key={index}/>
					)
				})}

				{this.state.showMoreButton ?
					<MoreButton onClick={this.loadMore}
								text={this.state.moreButtonText}/> :
					null}

				{this.state.modalPhotoData ?
					<ImageModal photo={this.state.modalPhotoData}
								onRequestClose={this.closeModal}/> :
					null}
			</div>
		);
	}
});

export default Gallery;
