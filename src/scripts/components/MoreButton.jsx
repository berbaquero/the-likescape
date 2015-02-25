import React from 'react';

var MoreButton = React.createClass({

	styles: {
		width: '51%',
		margin: '2em auto'
	},

	render() {
		return (
			<button onClick={this.props.onClick}
				className='btn-simple'
				style={this.styles}>{this.props.text}</button>
		)
	}
});

export default MoreButton;
