import React from 'react';

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

	handleClick(ev) {
		ev.preventDefault();
		this.props.onClick();
	},

	render() {
		var data = this.props.data;

		return (
			<a className={'ui-blck ' + (data.type === 'video' ? 'image-wrap video-overlay' : 'image-wrap')}
			   href='#'
			   onClick={this.handleClick}>

				<img src={data.images.standard_resolution.url}
					 onLoad={this.revealAnimation}
					 className='image-item'
					 style={this.state.styles}/>
			</a>
		)
	}
});

export default Image;
