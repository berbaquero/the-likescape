import React from 'react';
import ImageInfo from './ImageInfo.jsx';

const Image = React.createClass({

	getInitialState() {
		return {
			styles: {}
		}
	},

	revealAnimation() {
		this.state.styles.opacity = '1';
		this.setState({
			styles: this.state.styles
		});
	},

	render() {
		var data = this.props.data;
		var classes = data.type === 'video' ?
			'image-wrap video-overlay' : 'image-wrap';

		return (
			<div className={classes}
				 onClick={this.props.onClick}>

				<img src={data.images.standard_resolution.url}
					 onLoad={this.revealAnimation}
					 className='image-item'
					 style={this.state.styles}/>

				<ImageInfo user={data.user}
						   timestamp={data.created_time}
						   location={data.location}
						   link={data.link}/>
			</div>
		)
	}
});

export default Image;
