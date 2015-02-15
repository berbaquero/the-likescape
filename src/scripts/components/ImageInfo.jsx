var React = require('react');

// Components
var TimeAgo = require('./TimeAgo.jsx');

var ImageInfo = React.createClass({

	render() {
		var userName = this.props.user.full_name ?
			this.props.user.full_name :  this.props.user.username;
		var locationName;
		if (this.props.location && this.props.location.name) {
			locationName = <div className="image-location">@ {this.props.location.name}</div>
		}

		return (
			<div className='image-info'>
				<span className="username">{userName} &sdot; </span>
				<TimeAgo timestamp={this.props.timestamp} />
				{locationName}
				<a href={this.props.link}
					target='_black'>
					<img src='/images/link.svg'
						className='external-link'
						title='See on Instagram.com'/>
				</a>
			</div>
		)
	}
});

module.exports = ImageInfo;
