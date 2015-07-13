import React from 'react';
import ImageInfo from './ImageInfo.jsx';

const Modal = React.createClass({

	render() {
		const { photo } = this.props;
		const imageURL = photo.images.standard_resolution.url;

		return (
			<div className='modal anim-reveal'
				 onClick={this.props.onRequestClose}>

				 <div className='ui-super-center'>
					 <img className='image-modal ui-img ui-mrgn-b'
	 					 src={imageURL}/>

	 				 <ImageInfo user={photo.user}
	  						    timestamp={photo.created_time}
	  						    location={photo.location}
	  						    link={photo.link}/>
				 </div>
			</div>
		)
	}
});

export default Modal;
