var React = require('react');

var Image = React.createClass({

	imageStyles: {
		opacity: '0',
		maxWidth: '100%',
		transition: 'opacity 300ms ease 300ms'
	},

	getInitialState() {
		return {
			styles: this.imageStyles
		}
	},

	revealAnimation() {
		this.state.styles.opacity = '1';
		this.setState({
			styles: this.state.styles
		});
	},

	render() {
		return (
			<div>
				<img src={this.props.source}
					onLoad={this.revealAnimation}
					style={this.state.styles}/>
				<div>{this.props.title}</div>
			</div>
		)
	}
});

module.exports = Image;
