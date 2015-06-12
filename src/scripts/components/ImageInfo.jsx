import React from 'react';
import TimeAgo from './TimeAgo.jsx';

const ImageInfo = React.createClass({

	render() {
		let userName = this.props.user.full_name || this.props.user.username,
			locationName;
		if (this.props.location && this.props.location.name) {
			locationName =
				(<div className="image-location">
					@ {this.props.location.name}
				</div>)
		}

		return (
			<div className='image-info'>
				<span className="username">{userName} &sdot; </span>
				<TimeAgo timestamp={this.props.timestamp}/>
				{locationName}
				<a href={this.props.link}
				   target='_black'>
					<img src='images/link.svg'
						 className='external-link'
						 title='See on Instagram.com'/>
				</a>
			</div>
		)
	}
});

export default ImageInfo;
